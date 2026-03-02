### Roster Details<br />
Team Name: Isurus<br />
Roster: atarax1a, deco, dott1, FraGuTy, Hezz<br />
Global Rank: [168](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_02.md)<br />
Regional Rank: [37]( ../../standings_americas_2026_03_02.md)<br />
<br />
Final Rank Value:  775.0<br />
<br />
Final Rank Value (775.0) = Starting Rank Value (766.4) + Head To Head Adjustments (8.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.349[<sup>1</sup>](#table2)
- Bounty Collected: 0.267[<sup>2</sup>](#table1)
- Opponent Network: 0.057[<sup>2</sup>](#table1)
- LAN Wins: 0.101[<sup>2</sup>](#table1)

The average of these factors is 0.194<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 766.4
- 400 + ( ( 0.194 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 766.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |       10 | 2026-03-01 | Procyon     | L   | 1.000      | -            | -                | -                | -         |   -15.29 | atarax1a, deco, dott1, Hezz, timo    |
|           11 |       13 | 2026-03-01 | ex-KRÜ      | W   | 1.000      | 0.362        | 0.005 (0.002)    | 0.153 (0.055)    | 1 (1.000) |    10.80 | atarax1a, deco, dott1, Hezz, timo    |
|           10 |       33 | 2026-02-28 | Procyon     | L   | 1.000      | -            | -                | -                | -         |   -15.98 | atarax1a, deco, dott1, Hezz, timo    |
|            9 |     1197 | 2026-01-30 | Procyon     | L   | 0.994      | -            | -                | -                | -         |   -14.38 | atarax1a, deco, dott1, FraGuTy, Hezz |
|            8 |     1203 | 2026-01-30 | BESTIA      | L   | 0.993      | -            | -                | -                | -         |    -2.48 | atarax1a, deco, dott1, FraGuTy, Hezz |
|            7 |     1315 | 2026-01-25 | MIBR        | L   | 0.960      | -            | -                | -                | -         |    -1.06 | atarax1a, deco, dott1, FraGuTy, Hezz |
|            6 |     1331 | 2026-01-24 | Yawara      | W   | 0.955      | 0.371        | 0.003 (0.001)    | 0.264 (0.093)    | 0 (0.000) |    16.35 | atarax1a, deco, dott1, FraGuTy, Hezz |
|            5 |     1371 | 2026-01-23 | ShindeN     | W   | 0.948      | 0.371        | 0.040 (0.014)    | 0.522 (0.183)    | 0 (0.000) |    26.31 | atarax1a, deco, dott1, FraGuTy, Hezz |
|            4 |     1499 | 2026-01-20 | Crashers    | W   | 0.929      | 0.371        | 0.000 (0.000)    | 0.225 (0.077)    | 0 (0.000) |     6.49 | atarax1a, deco, dott1, FraGuTy, Hezz |
|            3 |     1535 | 2026-01-18 | Players     | L   | 0.916      | -            | -                | -                | -         |   -18.38 | atarax1a, deco, dott1, FraGuTy, Hezz |
|            2 |     1620 | 2026-01-16 | Bad Luck    | W   | 0.901      | 0.371        | 0.000 (0.000)    | 0.104 (0.035)    | 0 (0.000) |     3.24 | atarax1a, deco, dott1, FraGuTy, Hezz |
|            1 |     1718 | 2026-01-14 | GameHunters | W   | 0.886      | 0.371        | 0.002 (0.001)    | 0.395 (0.130)    | 0 (0.000) |    13.03 | atarax1a, deco, dott1, FraGuTy, Hezz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,541.41)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-01 |      1.000 | $2,400.00      | $2,400.00       |
| 2026-02-01 |      1.000 | $700.00        | $700.00         |
| 2026-01-25 |      0.961 | $1,500.00      | $1,441.41       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
