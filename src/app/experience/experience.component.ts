import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

declare var data: any;

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./experience.component.css'],
  standalone: false
})
export class ExperienceComponent implements OnInit {
  public experienceData = data['Experience'];
  public darkTheme: boolean = true;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.changeDetectorRef.detach();
  }

  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();
    setInterval(() => {
      this.darkTheme = !this.darkTheme;
      this.changeDetectorRef.detectChanges();
    }, 7100);
  }
}
