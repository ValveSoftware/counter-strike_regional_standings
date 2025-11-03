### Roster Details<br />
Team Name: Astralis<br />
Roster: device, HooXi, jabbi, Magisk, Staehr<br />
Global Rank: [14](../../standings_global_2025_11_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_11_03.md)<br />
Regional Rank: [11]( ../../standings_europe_2025_11_03.md)<br />
<br />
Final Rank Value:  1613.3<br />
<br />
Final Rank Value (1613.3) = Starting Rank Value (1674.1) + Head To Head Adjustments (-60.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.723[<sup>1</sup>](#table2)
- Bounty Collected: 0.689[<sup>2</sup>](#table1)
- Opponent Network: 0.435[<sup>2</sup>](#table1)
- LAN Wins: 0.871[<sup>2</sup>](#table1)

The average of these factors is 0.680<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1674.1
- 400 + ( ( 0.680 - 0.000 ) / ( 0.853 - 0.000 ) ) * 1600 = 1674.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           41 |       51 | 2025-10-30 | Aurora        | L   | 1.000      | -            | -                | -                | -         |    -8.40 | HooXi, jabbi, Magisk, ruggah, Staehr |
|           40 |       69 | 2025-10-29 | 3DMAX         | W   | 1.000      | 1.000        | 0.570 (0.570)    | 0.656 (0.656)    | 1 (1.000) |    18.98 | device, HooXi, jabbi, Magisk, Staehr |
|           39 |       81 | 2025-10-28 | Legacy        | L   | 1.000      | -            | -                | -                | -         |    -9.42 | device, HooXi, jabbi, Magisk, Staehr |
|           38 |       89 | 2025-10-27 | MIBR          | W   | 1.000      | 1.000        | 0.095 (0.095)    | 0.502 (0.502)    | 1 (1.000) |     6.91 | device, HooXi, jabbi, Magisk, Staehr |
|           37 |      112 | 2025-10-26 | B8            | L   | 1.000      | -            | -                | -                | -         |   -19.11 | device, HooXi, jabbi, Magisk, Staehr |
|           36 |      665 | 2025-10-06 | FaZe          | L   | 1.000      | -            | -                | -                | -         |   -14.14 | device, HooXi, jabbi, Magisk, Staehr |
|           35 |      730 | 2025-10-05 | Aurora        | L   | 1.000      | -            | -                | -                | -         |    -5.83 | device, HooXi, jabbi, Magisk, Staehr |
|           34 |      781 | 2025-10-04 | Falcons       | L   | 0.999      | -            | -                | -                | -         |    -8.35 | device, HooXi, jabbi, Magisk, Staehr |
|           33 |      845 | 2025-10-02 | Legacy        | W   | 0.986      | 0.769        | 1.000 (0.758)    | 0.664 (0.503)    | 1 (0.986) |    19.92 | device, HooXi, jabbi, Magisk, Staehr |
|           32 |      884 | 2025-10-01 | HEROIC        | W   | 0.980      | 0.769        | 0.340 (0.256)    | 0.437 (0.329)    | 1 (0.980) |    12.33 | device, HooXi, jabbi, Magisk, Staehr |
|           31 |      921 | 2025-09-30 | GamerLegion   | L   | 0.973      | -            | -                | -                | -         |   -16.21 | device, HooXi, jabbi, Magisk, Staehr |
|           30 |      965 | 2025-09-29 | ENCE          | L   | 0.966      | -            | -                | -                | -         |   -27.23 | device, HooXi, jabbi, Magisk, Staehr |
|           29 |     1013 | 2025-09-28 | Fluxo         | W   | 0.958      | 0.769        | -                | 0.551 (0.406)    | 1 (0.958) |     1.58 | device, HooXi, jabbi, Magisk, Staehr |
|           28 |     1302 | 2025-09-19 | FURIA         | L   | 0.900      | -            | -                | -                | -         |    -4.86 | device, HooXi, jabbi, Magisk, Staehr |
|           27 |     1385 | 2025-09-17 | GamerLegion   | W   | 0.886      | 1.000        | 0.295 (0.262)    | 0.470 (0.417)    | 1 (0.886) |    12.87 | device, HooXi, jabbi, Magisk, Staehr |
|           26 |     1397 | 2025-09-16 | Legacy        | W   | 0.881      | 1.000        | 1.000 (0.881)    | 0.664 (0.585)    | 1 (0.881) |    19.34 | device, HooXi, jabbi, Magisk, Staehr |
|           25 |     1418 | 2025-09-15 | paiN          | L   | 0.874      | -            | -                | -                | -         |   -17.34 | device, HooXi, jabbi, Magisk, Staehr |
|           24 |     1480 | 2025-09-14 | Virtus.pro    | W   | 0.865      | 1.000        | 0.155 (0.134)    | -                | 1 (0.865) |     3.69 | device, HooXi, jabbi, Magisk, Staehr |
|           23 |     1555 | 2025-09-12 | Aurora        | L   | 0.854      | -            | -                | -                | -         |    -4.79 | device, HooXi, jabbi, Magisk, Staehr |
|           22 |     2168 | 2025-08-20 | TYLOO         | L   | 0.700      | -            | -                | -                | -         |   -17.70 | device, HooXi, jabbi, Staehr, stavn  |
|           21 |     2368 | 2025-08-14 | MOUZ          | L   | 0.659      | -            | -                | -                | -         |    -7.65 | device, HooXi, jabbi, Staehr, stavn  |
|           20 |     2588 | 2025-08-09 | Natus Vincere | W   | 0.625      | 0.624        | 0.798 (0.312)    | -                | -         |    14.49 | device, HooXi, jabbi, Staehr, stavn  |
|           19 |     2628 | 2025-08-06 | Rare Atom     | W   | 0.608      | -            | -                | -                | -         |     0.53 | device, HooXi, jabbi, Staehr, stavn  |
|           18 |     2788 | 2025-07-27 | FURIA         | L   | 0.540      | -            | -                | -                | -         |    -2.85 | device, HooXi, jabbi, Staehr, stavn  |
|           17 |     2824 | 2025-07-26 | Vitality      | L   | 0.533      | -            | -                | -                | -         |    -4.19 | device, HooXi, jabbi, Staehr, stavn  |
|           16 |     2834 | 2025-07-25 | paiN          | W   | 0.527      | 0.769        | 0.277 (0.112)    | -                | 1 (0.527) |     5.34 | device, HooXi, jabbi, Staehr, stavn  |
|           15 |     2843 | 2025-07-25 | FURIA         | L   | 0.525      | -            | -                | -                | -         |    -2.67 | device, HooXi, jabbi, Staehr, stavn  |
|           14 |     2870 | 2025-07-23 | B8            | W   | 0.512      | -            | -                | -                | 1 (0.512) |     7.13 | device, HooXi, jabbi, Staehr, stavn  |
|           13 |     2891 | 2025-07-20 | TYLOO         | L   | 0.493      | -            | -                | -                | -         |   -12.12 | device, HooXi, jabbi, Staehr, stavn  |
|           12 |     2914 | 2025-07-19 | BetBoom       | W   | 0.487      | 1.000        | 0.315 (0.153)    | 1.000 (0.487)    | -         |     2.88 | device, HooXi, jabbi, Staehr, stavn  |
|           11 |     2957 | 2025-07-18 | Lynn Vision   | W   | 0.480      | -            | -                | -                | -         |     1.17 | device, HooXi, jabbi, Staehr, stavn  |
|           10 |     2970 | 2025-07-17 | MIBR          | W   | 0.474      | 1.000        | -                | 0.502 (0.238)    | -         |     2.66 | device, HooXi, jabbi, Staehr, stavn  |
|            9 |     2996 | 2025-07-16 | TYLOO         | L   | 0.467      | -            | -                | -                | -         |   -12.05 | device, HooXi, jabbi, Staehr, stavn  |
|            8 |     3013 | 2025-07-15 | MIBR          | W   | 0.461      | 1.000        | -                | 0.502 (0.231)    | -         |     2.44 | device, HooXi, jabbi, Staehr, stavn  |
|            7 |     3888 | 2025-05-18 | Spirit        | L   | 0.073      | -            | -                | -                | -         |    -1.08 | device, HooXi, jabbi, Staehr, stavn  |
|            6 |     3909 | 2025-05-17 | Aurora        | W   | 0.065      | -            | -                | -                | -         |     1.73 | device, HooXi, jabbi, Staehr, stavn  |
|            5 |     3933 | 2025-05-16 | Natus Vincere | W   | 0.058      | -            | -                | -                | -         |     1.36 | device, HooXi, jabbi, Staehr, stavn  |
|            4 |     4023 | 2025-05-13 | Virtus.pro    | W   | 0.038      | -            | -                | -                | -         |     0.13 | device, HooXi, jabbi, Staehr, stavn  |
|            3 |     4037 | 2025-05-12 | Spirit        | L   | 0.033      | -            | -                | -                | -         |    -0.48 | device, HooXi, jabbi, Staehr, stavn  |
|            2 |     4078 | 2025-05-11 | paiN          | W   | 0.024      | -            | -                | -                | -         |     0.24 | device, HooXi, jabbi, Staehr, stavn  |
|            1 |     4106 | 2025-05-10 | ODDIK         | W   | 0.017      | -            | -                | -                | -         |     0.05 | device, HooXi, jabbi, Staehr, stavn  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($256,766.30)
- Divide that value by the 5th highest value among all rosters ($619,318.60)
- The final value (0.41) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-01 |      1.000 | $31,250.00     | $31,250.00      |
| 2025-10-12 |      1.000 | $8,500.00      | $8,500.00       |
| 2025-09-21 |      0.914 | $67,500.00     | $61,705.88      |
| 2025-08-24 |      0.725 | $20,000.00     | $14,508.70      |
| 2025-08-17 |      0.680 | $18,750.00     | $12,746.82      |
| 2025-08-03 |      0.587 | $10,000.00     | $5,867.15       |
| 2025-07-20 |      0.493 | $220,000.00    | $108,506.85     |
| 2025-05-18 |      0.073 | $187,500.00    | $13,680.90      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
