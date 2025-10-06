// import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

// declare var data : any;
// declare var VanillaTilt:any;

// @Component({
//     selector: 'app-achievement',
//     templateUrl: './achievement.component.html',
//     changeDetection: ChangeDetectionStrategy.OnPush,
//     styleUrls: ['./achievement.component.css'],
//     standalone: false
// })

// export class AchievementComponent implements OnInit,AfterViewInit {
// 	public achievementData  = data['Achievement'];
// 	public checkScreenSize : boolean = screen.width >= 768;

// 	constructor(private changeDetectorRef: ChangeDetectorRef) {
// 		changeDetectorRef.detach();
// 	}

// 	ngOnInit(): void {
// 		this.changeDetectorRef.detectChanges();
// 	}

// 	ngAfterViewInit(): void {
// 		if (this.checkScreenSize) {
// 			let box: any = document.querySelectorAll('.box');
// 			VanillaTilt.init(box, {
// 				max: 25,
// 				speed: 400,
// 				startX: 0,
// 				startY: 0,
// 				scale: 1.03
// 			});
// 		}
//     }
// }











// import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

// declare var data : any;
// declare var VanillaTilt:any;

// @Component({
//     selector: 'app-education', // 🎯 1. Selector changed to 'app-education'
//     templateUrl: './education.component.html', // 🎯 2. Template file name updated
//     changeDetection: ChangeDetectionStrategy.OnPush,
//     styleUrls: ['./education.component.css'], // 🎯 3. Styles file name updated
//     standalone: false
// })

// // 🎯 4. Class name changed to EducationComponent
// export class EducationComponent implements OnInit,AfterViewInit {
//     // 🎯 5. Data property name updated to look for 'Education' in the data object
//     public educationData  = data['Education'];
//     public checkScreenSize : boolean = screen.width >= 768;

//     // 🎯 6. Constructor now belongs to EducationComponent
//     constructor(private changeDetectorRef: ChangeDetectorRef) {
//         changeDetectorRef.detach();
//     }

//     ngOnInit(): void {
//         this.changeDetectorRef.detectChanges();
//     }

//     ngAfterViewInit(): void {
//         if (this.checkScreenSize) {
//             let box: any = document.querySelectorAll('.box');
//             VanillaTilt.init(box, {
//                 max: 25,
//                 speed: 400,
//                 startX: 0,
//                 startY: 0,
//                 scale: 1.03
//             });
//         }
//     }
// }














import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
 
declare var data: any;
declare var VanillaTilt: any;
 
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./education.component.css'],
  standalone: false
})
export class EducationComponent implements OnInit, AfterViewInit {
 
  // Education cards data
  public educationData = data['Education'];
 
  // Tabs for navigation (like About component)
  public educationTabs = [
    { id: 'all', name: 'All', placement: 'bottom' },
    { id: 'certifications', name: 'Certifications', placement: 'bottom' }
  ];
 
  public activeTab = 'education'; // default active tab
  public activeElements: any = {};
  public selector: any;
 
  public checkScreenSize: boolean = screen.width >= 768;
 
  constructor(private changeDetectorRef: ChangeDetectorRef) {
    changeDetectorRef.detach();
  }
 
  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();
  }
 
  ngAfterViewInit(): void {
    // Initialize VanillaTilt for cards if on desktop
    if (this.checkScreenSize) {
      let box: any = document.querySelectorAll('.box');
      VanillaTilt.init(box, {
        max: 25,
        speed: 400,
        startX: 0,
        startY: 0,
        scale: 1.03
      });
    }
 
    // Initialize tab selector
    for (const tab of this.educationTabs) {
      if (!this.activeElements[tab.id]) {
        this.activeElements[tab.id] = document.getElementById(tab.id + '-tab')!!;
      }
      this.activeElements[tab.id].addEventListener('click', (event: any) => event.preventDefault());
    }
 
    this.changeActiveTab(this.activeTab);
  }
 
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.updateSelector(this.activeTab);
  }
 
  public changeActiveTab(tab: string) {
    this.updateSelector(tab);
    this.activeTab = tab;
    this.changeDetectorRef.detectChanges();
  }
 
  public updateSelector(tab: string) {
    if (!this.selector) {
      this.selector = document.getElementById('selector');
    }
    this.selector.style.width = `${this.activeElements[tab].offsetWidth}px`;
    this.selector.style.left = `${this.activeElements[tab].offsetLeft}px`;
  }
}

