### Roster Details<br />
Team Name: GATERON<br />
Roster: Niko, reason, Tw1nk1e17, z1ayr<br />
Global Rank: [254](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_03_02.md)<br />
Regional Rank: [34]( ../../standings_asia_2026_03_02.md)<br />
<br />
Final Rank Value:  593.2<br />
<br />
Final Rank Value (593.2) = Starting Rank Value (603.3) + Head To Head Adjustments (-10.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.224[<sup>1</sup>](#table2)
- Bounty Collected: 0.201[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.107<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 603.3
- 400 + ( ( 0.107 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 603.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     2970 | 2025-11-07 | EGG               | L   | 0.432      | -            | -                | -                | -         |    -8.72 | DeathFine, ItsukaKotori, reason, Tw1nk1e17, z1ayr |
|           13 |     3017 | 2025-11-06 | Change The Game   | L   | 0.424      | -            | -                | -                | -         |    -3.99 | DeathFine, ItsukaKotori, reason, Tw1nk1e17, z1ayr |
|           12 |     3393 | 2025-10-25 | The QUBE          | L   | 0.346      | -            | -                | -                | -         |    -4.80 | Niko, reason, RW, Tw1nk1e17, z1ayr                |
|           11 |     3453 | 2025-10-24 | BMZ               | L   | 0.339      | -            | -                | -                | -         |    -3.14 | Niko, reason, RW, Tw1nk1e17, z1ayr                |
|           10 |     3499 | 2025-10-23 | Legion            | W   | 0.333      | 0.333        | 0.006 (0.001)    | 0.317 (0.035)    | 0 (0.000) |     6.13 | Melai, Niko, reason, Tw1nk1e17, z1ayr             |
|            9 |     3971 | 2025-10-07 | Chinggis Warriors | L   | 0.226      | -            | -                | -                | -         |    -1.60 | Niko, reason, Tw1nk1e17, z1ayr, zzi               |
|            8 |     4038 | 2025-10-06 | IHC               | W   | 0.219      | 0.333        | 0.000 (0.000)    | 0.014 (0.001)    | 0 (0.000) |     3.14 | M1racle, Niko, reason, Tw1nk1e17, z1ayr           |
|            7 |     4092 | 2025-10-05 | Rare Atom         | L   | 0.212      | -            | -                | -                | -         |    -0.80 | M1racle, Niko, reason, Tw1nk1e17, z1ayr           |
|            6 |     4743 | 2025-09-17 | The Huns          | L   | 0.093      | -            | -                | -                | -         |    -0.15 | M1racle, Niko, reason, Tw1nk1e17, z1ayr           |
|            5 |     4929 | 2025-09-12 | Last Bullet       | W   | 0.060      | 0.333        | 0.008 (0.000)    | 0.171 (0.003)    | 0 (0.000) |     1.23 | M1racle, Niko, reason, Tw1nk1e17, z1ayr           |
|            4 |     4984 | 2025-09-11 | Legion            | W   | 0.053      | 0.333        | 0.006 (0.000)    | 0.317 (0.006)    | 0 (0.000) |     0.98 | M1racle, Niko, reason, Tw1nk1e17, z1ayr           |
|            3 |     5035 | 2025-09-10 | FengDa            | W   | 0.046      | 0.333        | 0.012 (0.000)    | 0.168 (0.003)    | 0 (0.000) |     1.09 | M1racle, Niko, reason, Tw1nk1e17, z1ayr           |
|            2 |     5084 | 2025-09-09 | ScarX             | W   | 0.039      | 0.333        | 0.000 (0.000)    | 0.098 (0.001)    | 0 (0.000) |     0.60 | M1racle, Niko, reason, Tw1nk1e17, z1ayr           |
|            1 |     5128 | 2025-09-08 | The Huns          | L   | 0.033      | -            | -                | -                | -         |    -0.05 | Niko, reason, Tw1nk1e17, Yolo267, z1ayr           |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($112.95)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-09-20 |      0.113 | $1,000.00      | $112.95         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
