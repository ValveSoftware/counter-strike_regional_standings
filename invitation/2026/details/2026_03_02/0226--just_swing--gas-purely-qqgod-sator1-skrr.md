### Roster Details<br />
Team Name: Just Swing<br />
Roster: gas, Purely, qqGOD, sATOR1, skrr<br />
Global Rank: [226](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_03_02.md)<br />
Regional Rank: [29]( ../../standings_asia_2026_03_02.md)<br />
<br />
Final Rank Value:  645.4<br />
<br />
Final Rank Value (645.4) = Starting Rank Value (679.9) + Head To Head Adjustments (-34.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.284[<sup>1</sup>](#table2)
- Bounty Collected: 0.221[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.078[<sup>2</sup>](#table1)

The average of these factors is 0.148<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 679.9
- 400 + ( ( 0.148 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 679.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |      435 | 2026-02-19 | Legion            | L   | 1.000      | -            | -                | -                | -         |   -13.56 | Daniel, gas, qqGOD, sATOR1, skrr |
|           18 |      559 | 2026-02-17 | NomadS            | L   | 1.000      | -            | -                | -                | -         |   -18.55 | Daniel, gas, qqGOD, sATOR1, skrr |
|           17 |     1558 | 2026-01-18 | JiJieHao          | L   | 0.911      | -            | -                | -                | -         |    -4.93 | gas, Purely, qqGOD, sATOR1, skrr |
|           16 |     1860 | 2025-12-29 | FengDa            | L   | 0.779      | -            | -                | -                | -         |    -8.21 | gas, Purely, qqGOD, sATOR1, skrr |
|           15 |     1862 | 2025-12-28 | Shika             | W   | 0.772      | 0.368        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.772) |     6.88 | gas, Purely, qqGOD, sATOR1, skrr |
|           14 |     1868 | 2025-12-27 | Rare Atom         | L   | 0.766      | -            | -                | -                | -         |    -3.91 | gas, Purely, qqGOD, sATOR1, skrr |
|           13 |     3342 | 2025-10-26 | Change The Game   | L   | 0.353      | -            | -                | -                | -         |    -4.70 | gas, HiNa, Purely, qqGOD, sATOR1 |
|           12 |     3387 | 2025-10-25 | ScarX             | W   | 0.346      | 0.333        | 0.000 (0.000)    | 0.098 (0.011)    | 0 (0.000) |     3.98 | gas, HiNa, Purely, qqGOD, sATOR1 |
|           11 |     3456 | 2025-10-24 | Arise             | W   | 0.339      | 0.333        | 0.004 (0.000)    | 0.168 (0.019)    | 0 (0.000) |     4.83 | gas, HiNa, Purely, qqGOD, sATOR1 |
|           10 |     3506 | 2025-10-23 | Last Bullet       | L   | 0.332      | -            | -                | -                | -         |    -4.79 | gas, HiNa, Purely, qqGOD, sATOR1 |
|            9 |     3866 | 2025-10-09 | Morningstar       | L   | 0.239      | -            | -                | -                | -         |    -1.32 | gas, HiNa, Purely, qqGOD, sATOR1 |
|            8 |     3919 | 2025-10-08 | Chinggis Warriors | W   | 0.233      | 0.333        | 0.015 (0.001)    | 0.222 (0.017)    | 0 (0.000) |     5.08 | gas, HiNa, Purely, qqGOD, sATOR1 |
|            7 |     3972 | 2025-10-07 | Legion            | W   | 0.226      | 0.333        | 0.006 (0.000)    | 0.317 (0.024)    | 0 (0.000) |     3.48 | gas, HiNa, Purely, qqGOD, sATOR1 |
|            6 |     4028 | 2025-10-06 | The Huns          | L   | 0.219      | -            | -                | -                | -         |    -0.52 | gas, HiNa, Purely, qqGOD, sATOR1 |
|            5 |     4093 | 2025-10-05 | Last Bullet       | W   | 0.212      | 0.333        | 0.008 (0.001)    | 0.171 (0.012)    | 0 (0.000) |     3.71 | gas, HiNa, Purely, qqGOD, sATOR1 |
|            4 |     4834 | 2025-09-14 | FengDa            | L   | 0.072      | -            | -                | -                | -         |    -0.76 | gas, HiNa, Purely, qqGOD, sATOR1 |
|            3 |     5032 | 2025-09-10 | NomadS            | L   | 0.046      | -            | -                | -                | -         |    -0.85 | gas, HiNa, Purely, qqGOD, sATOR1 |
|            2 |     5078 | 2025-09-09 | Chinggis Warriors | L   | 0.040      | -            | -                | -                | -         |    -0.72 | gas, HiNa, Purely, qqGOD, sATOR1 |
|            1 |     5126 | 2025-09-08 | IHC               | W   | 0.033      | 0.333        | 0.000 (0.000)    | 0.014 (0.000)    | 0 (0.000) |     0.37 | gas, HiNa, Purely, qqGOD, sATOR1 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,010.50)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-30 |      0.786 | $1,010.00      | $793.54         |
| 2025-09-14 |      0.072 | $3,000.00      | $216.96         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
