### Roster Details<br />
Team Name: Latvia<br />
Roster: Frip, keen, prelideN, rud, shadiy<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [104](../standings_global.md)<br />
Regional Rank: [75]( ../standings_europe.md)<br />
Final Rank Value:  868.5<br />
<br />
Final Rank Value (868.5) = Starting Rank Value (869.4) + Head To Head Adjustments (-0.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.320[<sup>1</sup>](#table2)
- Bounty Collected: 0.281[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.309[<sup>2</sup>](#table1)

The average of these factors is 0.232<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 869.4
- 400 + ( ( 0.232 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 869.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      413 | 2024-07-14 | ALTERNATE aTTaX | L   | 1.000      | -            | -                | -                | -         |   -15.58 | Frip, keen, prelideN, rud, shadiy    |
|            9 |      474 | 2024-07-10 | Norway          | W   | 1.000      | 0.143        | 0.008 (0.001)    | 0.116 (0.017)    | 0 (0.000) |     8.11 | Frip, keen, prelideN, rud, shadiy    |
|            8 |      510 | 2024-07-08 | 3DMAX           | W   | 1.000      | 0.143        | 0.175 (0.025)    | 1.000 (0.143)    | 0 (0.000) |    27.18 | Frip, keen, prelideN, rud, shadiy    |
|            7 |      517 | 2024-07-08 | Kosovo          | L   | 1.000      | -            | -                | -                | -         |   -16.49 | Frip, keen, prelideN, rud, shadiy    |
|            6 |      865 | 2024-06-09 | Esprots         | L   | 0.898      | -            | -                | -                | -         |   -19.68 | Frip, keen, prelideN, raw, shadiy    |
|            5 |      896 | 2024-06-08 | hypewrld        | W   | 0.893      | 0.334        | 0.003 (0.001)    | 0.035 (0.010)    | 1 (0.893) |     6.65 | Frip, keen, prelideN, raw, shadiy    |
|            4 |     1950 | 2024-05-05 | hypewrld        | W   | 0.667      | 0.257        | 0.003 (0.001)    | 0.035 (0.006)    | 1 (0.667) |     5.24 | flairr, Frip, Mairel, rud, shadiy    |
|            3 |     1954 | 2024-05-05 | MightyWolves    | W   | 0.666      | 0.257        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.666) |     1.39 | flairr, Frip, Mairel, rud, shadiy    |
|            2 |     3627 | 2024-02-24 | hypewrld        | W   | 0.194      | 0.262        | 0.003 (0.000)    | 0.035 (0.002)    | 1 (0.194) |     1.55 | EIZA, keen, prelideN, shadiy, shield |
|            1 |     3632 | 2024-02-24 | kloogarand      | W   | 0.193      | 0.262        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.193) |     0.69 | EIZA, keen, prelideN, shadiy, shield |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,067.71)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.899 | $1,340.00      | $1,204.29       |
| 2024-05-05 |      0.667 | $1,077.00      | $717.99         |
| 2024-02-24 |      0.194 | $750.00        | $145.43         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
