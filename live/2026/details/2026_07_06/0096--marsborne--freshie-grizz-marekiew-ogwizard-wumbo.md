### Roster Details<br />
Team Name: Marsborne<br />
Roster: freshie, Grizz, marekiew, ogwizard, WUMBO<br />
Global Rank: [96](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_07_06.md)<br />
Regional Rank: [22]( ../../standings_americas_2026_07_06.md)<br />
<br />
Final Rank Value:  999.4<br />
<br />
Final Rank Value (999.4) = Starting Rank Value (983.1) + Head To Head Adjustments (16.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.331[<sup>1</sup>](#table2)
- Bounty Collected: 0.299[<sup>2</sup>](#table1)
- Opponent Network: 0.081[<sup>2</sup>](#table1)
- LAN Wins: 0.526[<sup>2</sup>](#table1)

The average of these factors is 0.309<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 983.1
- 400 + ( ( 0.309 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 983.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |      267 | 2026-06-14 | Iowa Stormboar  | W   | 1.000      | 0.303        | 0.012 (0.004)    | 0.432 (0.131)    | 0 (0.000) |     8.01 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|           16 |      295 | 2026-06-13 | Festina Lente   | W   | 1.000      | 0.303        | 0.001 (0.000)    | 0.074 (0.022)    | 0 (0.000) |     4.30 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|           15 |      344 | 2026-06-12 | Overtake Sector | W   | 1.000      | 0.303        | 0.004 (0.001)    | 0.074 (0.022)    | 0 (0.000) |     3.88 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|           14 |      380 | 2026-06-11 | F5              | W   | 1.000      | 0.303        | 0.005 (0.002)    | 0.281 (0.085)    | 0 (0.000) |     8.63 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|           13 |      616 | 2026-05-31 | Chicken Coop    | L   | 0.962      | -            | -                | -                | -         |   -14.36 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|           12 |      624 | 2026-05-31 | SportsBetExpert | W   | 0.961      | 0.294        | 0.003 (0.001)    | 0.173 (0.049)    | 1 (0.961) |     9.93 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|           11 |      632 | 2026-05-31 | Chicken Coop    | L   | 0.960      | -            | -                | -                | -         |   -15.16 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|           10 |      652 | 2026-05-30 | Reign Above     | W   | 0.955      | 0.294        | 0.000 (0.000)    | 0.190 (0.053)    | 1 (0.955) |     4.58 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            9 |      667 | 2026-05-30 | LAG             | W   | 0.954      | 0.294        | 0.024 (0.007)    | 0.520 (0.146)    | 1 (0.954) |    13.12 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            8 |      899 | 2026-05-24 | Overtake Sector | W   | 0.916      | 0.278        | 0.004 (0.001)    | 0.074 (0.019)    | -         |     3.50 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            7 |      903 | 2026-05-24 | SportsBetExpert | L   | 0.915      | -            | -                | -                | -         |   -20.66 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            6 |     1864 | 2026-04-26 | Passion UA      | L   | 0.728      | -            | -                | -                | -         |    -7.53 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            5 |     1879 | 2026-04-26 | Fisher College  | L   | 0.728      | -            | -                | -                | -         |   -10.24 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            4 |     1917 | 2026-04-25 | M80             | W   | 0.724      | 0.371        | 0.070 (0.019)    | 0.558 (0.150)    | 1 (0.724) |    19.99 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            3 |     1921 | 2026-04-25 | Voca            | W   | 0.723      | 0.371        | 0.041 (0.011)    | 0.494 (0.132)    | 1 (0.723) |    14.79 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            2 |     1931 | 2026-04-25 | FRZ             | W   | 0.722      | -            | -                | -                | 1 (0.722) |     1.30 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            1 |     1940 | 2026-04-25 | Voca            | L   | 0.721      | -            | -                | -                | -         |    -7.73 | freshie, Grizz, marekiew, ogwizard, WUMBO |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,403.49)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-14 |      1.000 | $3,000.00      | $3,000.00       |
| 2026-05-31 |      0.962 | $1,200.00      | $1,154.44       |
| 2026-05-24 |      0.916 | $250.00        | $229.02         |
| 2026-04-26 |      0.729 | $1,400.00      | $1,020.04       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
