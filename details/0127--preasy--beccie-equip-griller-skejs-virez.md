### Roster Details<br />
Team Name: Preasy<br />
Roster: Beccie, Equip, Griller, Skejs, VireZ<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [127](../standings_global.md)<br />
Regional Rank: [84]( ../standings_europe.md)<br />
Final Rank Value:  800.3<br />
<br />
Final Rank Value (800.3) = Starting Rank Value (813.5) + Head To Head Adjustments (-13.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.344[<sup>1</sup>](#table2)
- Bounty Collected: 0.322[<sup>2</sup>](#table1)
- Opponent Network: 0.042[<sup>2</sup>](#table1)
- LAN Wins: 0.076[<sup>2</sup>](#table1)

The average of these factors is 0.196<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 813.5
- 400 + ( ( 0.196 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 813.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |       28 | 2024-07-10 | Insilio           | L   | 1.000      | -            | -                | -                | -         |    -7.40 | Beccie, Equip, Griller, Skejs, VireZ   |
|           15 |      166 | 2024-06-16 | Aurora Young Blud | L   | 1.000      | -            | -                | -                | -         |   -14.68 | Beccie, Equip, Griller, Skejs, VireZ   |
|           14 |      201 | 2024-06-15 | LEON              | W   | 1.000      | 0.143        | 0.010 (0.001)    | 0.167 (0.024)    | 0 (0.000) |    11.08 | Beccie, Equip, Griller, Skejs, VireZ   |
|           13 |      302 | 2024-06-12 | MASONIC           | W   | 1.000      | 0.143        | 0.015 (0.002)    | 0.114 (0.016)    | 0 (0.000) |    15.36 | Beccie, Equip, Griller, Skejs, VireZ   |
|           12 |      318 | 2024-06-11 | CYBERSHOKE        | L   | 0.999      | -            | -                | -                | -         |   -12.79 | Beccie, Equip, Griller, Skejs, VireZ   |
|           11 |      414 | 2024-06-09 | Johnny Speeds     | L   | 0.984      | -            | -                | -                | -         |    -1.87 | Equip, Griller, Maze, Skejs, VireZ     |
|           10 |      864 | 2024-05-28 | Permitta          | L   | 0.905      | -            | -                | -                | -         |    -8.85 | Beccie, Equip, Griller, Skejs, VireZ   |
|            9 |      904 | 2024-05-26 | Johnny Speeds     | L   | 0.892      | -            | -                | -                | -         |    -1.47 | Beccie, Equip, Griller, Skejs, VireZ   |
|            8 |      998 | 2024-05-22 | Czech Republic    | W   | 0.865      | 0.371        | 0.104 (0.033)    | 0.493 (0.158)    | 0 (0.000) |    24.12 | Beccie, Equip, Griller, Skejs, VireZ   |
|            7 |     1261 | 2024-05-15 | kONO              | L   | 0.818      | -            | -                | -                | -         |    -8.41 | Beccie, Equip, Griller, Skejs, VireZ   |
|            6 |     1311 | 2024-05-14 | Zero Tenacity     | L   | 0.812      | -            | -                | -                | -         |    -4.73 | AcilioN, Beccie, Equip, Griller, VireZ |
|            5 |     1361 | 2024-05-12 | Johnny Speeds     | W   | 0.798      | 0.333        | 0.158 (0.042)    | 0.825 (0.219)    | 0 (0.000) |    24.12 | Beccie, Equip, Griller, Skejs, VireZ   |
|            4 |     1395 | 2024-05-11 | Passion UA        | L   | 0.791      | -            | -                | -                | -         |    -5.99 | Beccie, Equip, Griller, Skejs, VireZ   |
|            3 |     1674 | 2024-04-27 | 777               | L   | 0.699      | -            | -                | -                | -         |   -13.01 | Beccie, Equip, Griller, Skejs, VireZ   |
|            2 |     1806 | 2024-04-21 | Astralis Talent   | L   | 0.658      | -            | -                | -                | -         |   -12.00 | Beccie, Equip, Griller, Skejs, VireZ   |
|            1 |     1813 | 2024-04-20 | Sashi Academy     | W   | 0.654      | 0.318        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.654) |     3.34 | Beccie, Equip, Griller, Skejs, VireZ   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,219.01)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.987 | $1,445.00      | $1,425.72       |
| 2024-05-16 |      0.824 | $1,500.00      | $1,236.39       |
| 2024-04-27 |      0.701 | $795.00        | $556.90         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
