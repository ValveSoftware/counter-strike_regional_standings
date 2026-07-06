### Roster Details<br />
Team Name: F5<br />
Roster: bones, cmrn, Kermi, neight, Signal<br />
Global Rank: [192](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_07_06.md)<br />
Regional Rank: [40]( ../../standings_americas_2026_07_06.md)<br />
<br />
Final Rank Value:  760.9<br />
<br />
Final Rank Value (760.9) = Starting Rank Value (865.8) + Head To Head Adjustments (-104.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.305[<sup>1</sup>](#table2)
- Bounty Collected: 0.238[<sup>2</sup>](#table1)
- Opponent Network: 0.035[<sup>2</sup>](#table1)
- LAN Wins: 0.411[<sup>2</sup>](#table1)

The average of these factors is 0.247<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 865.8
- 400 + ( ( 0.247 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 865.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |      342 | 2026-06-12 | Wanted Goons    | L   | 1.000      | -            | -                | -                | -         |   -19.06 | cmrn, Grimblee, Kermi, neight, Signal |
|           32 |      349 | 2026-06-12 | Wanted Goons    | L   | 1.000      | -            | -                | -                | -         |   -20.70 | bones, cmrn, Kermi, neight, Signal    |
|           31 |      380 | 2026-06-11 | Marsborne       | L   | 1.000      | -            | -                | -                | -         |    -8.63 | bones, cmrn, Kermi, neight, Signal    |
|           30 |      648 | 2026-05-30 | Reign Above     | L   | 0.956      | -            | -                | -                | -         |   -20.23 | bones, cmrn, Kermi, neight, Signal    |
|           29 |      649 | 2026-05-30 | FRZ             | W   | 0.955      | 0.294        | 0.000 (0.000)    | 0.055 (0.015)    | 1 (0.955) |     3.75 | bones, cmrn, Kermi, neight, Signal    |
|           28 |      659 | 2026-05-30 | makeSHIFT       | W   | 0.955      | 0.294        | 0.000 (0.000)    | -                | 1 (0.955) |     2.52 | bones, cmrn, Kermi, neight, Signal    |
|           27 |      665 | 2026-05-30 | Chicken Coop    | L   | 0.954      | -            | -                | -                | -         |    -9.57 | bones, cmrn, Kermi, neight, Signal    |
|           26 |      673 | 2026-05-30 | absolute cinema | W   | 0.953      | 0.294        | 0.000 (0.000)    | -                | 1 (0.953) |     2.45 | bones, cmrn, Kermi, neight, Signal    |
|           25 |     1761 | 2026-04-28 | Reign Above     | L   | 0.743      | -            | -                | -                | -         |   -17.32 | bones, cmrn, Kermi, neight, Signal    |
|           24 |     1802 | 2026-04-27 | Surge           | W   | 0.736      | 0.363        | 0.000 (0.000)    | 0.043 (0.011)    | 0 (0.000) |     3.23 | bones, cmrn, Kermi, neight, Signal    |
|           23 |     1846 | 2026-04-26 | Chicken Coop    | L   | 0.730      | -            | -                | -                | -         |    -7.50 | bones, cmrn, Grimblee, neight, Signal |
|           22 |     2326 | 2026-04-09 | Iowa Stormboar  | L   | 0.617      | -            | -                | -                | -         |   -11.78 | bones, cmrn, Kermi, neight, Signal    |
|           21 |     2379 | 2026-04-07 | regain          | W   | 0.603      | 0.363        | 0.009 (0.002)    | 0.361 (0.079)    | 0 (0.000) |     7.03 | bones, cmrn, Kermi, neight, Signal    |
|           20 |     2454 | 2026-04-05 | Iowa Stormboar  | W   | 0.590      | 0.363        | 0.012 (0.003)    | 0.432 (0.092)    | 0 (0.000) |     7.74 | bones, cmrn, Kermi, neight, Signal    |
|           19 |     2595 | 2026-04-03 | 900FPSvsECO     | W   | 0.576      | 0.363        | 0.002 (0.000)    | 0.140 (0.029)    | 0 (0.000) |     4.77 | bones, cmrn, Kermi, neight, Signal    |
|           18 |     2678 | 2026-04-02 | FarmVille       | W   | 0.570      | 0.363        | 0.005 (0.001)    | 0.280 (0.058)    | 0 (0.000) |     6.78 | bones, cmrn, Kermi, neight, Signal    |
|           17 |     3114 | 2026-03-28 | Voca            | L   | 0.536      | -            | -                | -                | -         |    -2.86 | bones, cmrn, Kermi, neight, Signal    |
|           16 |     3131 | 2026-03-28 | FRZ             | W   | 0.535      | 0.354        | -                | 0.055 (0.010)    | 1 (0.535) |     1.97 | bones, cmrn, Kermi, neight, Signal    |
|           15 |     3152 | 2026-03-28 | Fisher College  | L   | 0.534      | -            | -                | -                | -         |    -4.12 | bones, cmrn, Kermi, neight, Signal    |
|           14 |     3161 | 2026-03-28 | FRZ             | W   | 0.534      | 0.354        | -                | 0.055 (0.010)    | 1 (0.534) |     1.90 | bones, cmrn, Kermi, neight, Signal    |
|           13 |     3331 | 2026-03-24 | LAG             | L   | 0.510      | -            | -                | -                | -         |    -4.00 | bones, cmrn, Kermi, neight, Signal    |
|           12 |     3390 | 2026-03-23 | Wanted Goons    | W   | 0.504      | 0.363        | 0.000 (0.000)    | 0.172 (0.031)    | -         |     5.49 | bones, cmrn, Kermi, neight, Signal    |
|           11 |     3470 | 2026-03-22 | OverKnight      | W   | 0.497      | -            | -                | -                | -         |     1.89 | bones, cmrn, Kermi, neight, Signal    |
|           10 |     3514 | 2026-03-21 | Surge           | W   | 0.490      | 0.363        | -                | 0.043 (0.008)    | -         |     2.07 | bones, cmrn, Kermi, neight, Signal    |
|            9 |     3577 | 2026-03-20 | regain          | L   | 0.483      | -            | -                | -                | -         |   -10.00 | bones, cmrn, Kermi, neight, Signal    |
|            8 |     3766 | 2026-03-16 | Fisher College  | L   | 0.456      | -            | -                | -                | -         |    -3.95 | bones, cmrn, Kermi, neight, Signal    |
|            7 |     3811 | 2026-03-15 | Mythic          | W   | 0.450      | -            | -                | -                | -         |     1.71 | bones, cmrn, Kermi, neight, Signal    |
|            6 |     5115 | 2026-02-17 | Fisher College  | L   | 0.277      | -            | -                | -                | -         |    -2.23 | bones, cmrn, Kermi, neight, Signal    |
|            5 |     5392 | 2026-02-12 | Chicken Coop    | L   | 0.243      | -            | -                | -                | -         |    -2.20 | bones, cmrn, Kermi, neight, Signal    |
|            4 |     5465 | 2026-02-10 | FlyQuest RED    | W   | 0.230      | 0.333        | 0.000 (0.000)    | -                | -         |     1.28 | bones, cmrn, Kermi, neight, Signal    |
|            3 |     5529 | 2026-02-08 | Villainous      | L   | 0.216      | -            | -                | -                | -         |    -5.06 | bones, Kermi, neight, Signal, vin3    |
|            2 |     5625 | 2026-02-05 | Outfit 49       | L   | 0.197      | -            | -                | -                | -         |    -4.99 | bones, cmrn, Kermi, neight, Signal    |
|            1 |     5650 | 2026-02-04 | OverKnight      | L   | 0.190      | -            | -                | -                | -         |    -5.34 | bones, cmrn, Kermi, neight, Signal    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,997.05)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-09 |      0.617 | $4,000.00      | $2,467.03       |
| 2026-03-27 |      0.530 | $1,000.00      | $530.02         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
