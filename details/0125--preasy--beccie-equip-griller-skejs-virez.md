### Roster Details<br />
Team Name: Preasy<br />
Roster: Beccie, Equip, Griller, Skejs, VireZ<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [125](../standings_global.md)<br />
Regional Rank: [83]( ../standings_europe.md)<br />
Final Rank Value:  794.8<br />
<br />
Final Rank Value (794.8) = Starting Rank Value (800.2) + Head To Head Adjustments (-5.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.342[<sup>1</sup>](#table2)
- Bounty Collected: 0.323[<sup>2</sup>](#table1)
- Opponent Network: 0.038[<sup>2</sup>](#table1)
- LAN Wins: 0.084[<sup>2</sup>](#table1)

The average of these factors is 0.197<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 800.2
- 400 + ( ( 0.197 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 800.2


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
|           15 |       30 | 2024-06-16 | Aurora Young Blud | L   | 1.000      | -            | -                | -                | -         |   -14.08 | Beccie, Equip, Griller, Skejs, VireZ   |
|           14 |       65 | 2024-06-15 | LEON              | W   | 1.000      | 0.143        | 0.008 (0.001)    | 0.165 (0.024)    | 0 (0.000) |    11.03 | Beccie, Equip, Griller, Skejs, VireZ   |
|           13 |      166 | 2024-06-12 | MASONIC           | W   | 1.000      | 0.143        | 0.015 (0.002)    | 0.122 (0.017)    | 0 (0.000) |    16.02 | Beccie, Equip, Griller, Skejs, VireZ   |
|           12 |      182 | 2024-06-11 | CYBERSHOKE        | L   | 1.000      | -            | -                | -                | -         |   -13.23 | Beccie, Equip, Griller, Skejs, VireZ   |
|           11 |      278 | 2024-06-09 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |    -2.81 | Equip, Griller, Maze, Skejs, VireZ     |
|           10 |      730 | 2024-05-28 | Permitta          | L   | 1.000      | -            | -                | -                | -         |    -9.45 | Beccie, Equip, Griller, Skejs, VireZ   |
|            9 |      770 | 2024-05-26 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |    -2.56 | Beccie, Equip, Griller, Skejs, VireZ   |
|            8 |      864 | 2024-05-22 | ECLOT             | W   | 1.000      | 0.371        | 0.107 (0.040)    | 0.478 (0.177)    | 0 (0.000) |    27.59 | Beccie, Equip, Griller, Skejs, VireZ   |
|            7 |     1127 | 2024-05-15 | kONO              | L   | 0.974      | -            | -                | -                | -         |    -9.47 | Beccie, Equip, Griller, Skejs, VireZ   |
|            6 |     1177 | 2024-05-14 | Zero Tenacity     | L   | 0.968      | -            | -                | -                | -         |    -5.37 | AcilioN, Beccie, Equip, Griller, VireZ |
|            5 |     1227 | 2024-05-12 | Johnny Speeds     | W   | 0.954      | 0.333        | 0.118 (0.038)    | 0.507 (0.161)    | 0 (0.000) |    28.09 | Beccie, Equip, Griller, Skejs, VireZ   |
|            4 |     1261 | 2024-05-11 | Passion UA        | L   | 0.947      | -            | -                | -                | -         |    -6.63 | Beccie, Equip, Griller, Skejs, VireZ   |
|            3 |     1540 | 2024-04-27 | 777               | L   | 0.855      | -            | -                | -                | -         |   -15.67 | Beccie, Equip, Griller, Skejs, VireZ   |
|            2 |     1672 | 2024-04-21 | Astralis Talent   | L   | 0.814      | -            | -                | -                | -         |   -13.36 | Beccie, Equip, Griller, Skejs, VireZ   |
|            1 |     1679 | 2024-04-20 | Sashi Academy     | W   | 0.810      | 0.318        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.810) |     4.42 | Beccie, Equip, Griller, Skejs, VireZ   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,595.56)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $1,445.00      | $1,445.00       |
| 2024-05-16 |      0.980 | $1,500.00      | $1,469.90       |
| 2024-04-27 |      0.856 | $795.00        | $680.66         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
