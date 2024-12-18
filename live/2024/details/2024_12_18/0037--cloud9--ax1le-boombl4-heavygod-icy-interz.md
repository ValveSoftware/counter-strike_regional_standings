### Roster Details<br />
Team Name: Cloud9<br />
Roster: Ax1Le, Boombl4, HeavyGod, ICY, interz<br />
Global Rank: [37](../../standings_global_2024_12_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_18.md)<br />
Regional Rank: [27]( ../../standings_europe_2024_12_18.md)<br />
<br />
Final Rank Value:  1173.9<br />
<br />
Final Rank Value (1173.9) = Starting Rank Value (1057.0) + Head To Head Adjustments (116.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.464[<sup>1</sup>](#table2)
- Bounty Collected: 0.391[<sup>2</sup>](#table1)
- Opponent Network: 0.102[<sup>2</sup>](#table1)
- LAN Wins: 0.415[<sup>2</sup>](#table1)

The average of these factors is 0.343<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1057.0
- 400 + ( ( 0.343 - 0.000 ) / ( 0.835 - 0.000 ) ) * 1600 = 1057.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           35 |      316 | 2024-12-02 | Complexity        | L   | 1.000      | -            | -                | -                | -         |    -7.15 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           34 |      336 | 2024-11-30 | paiN              | L   | 1.000      | -            | -                | -                | -         |    -5.90 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           33 |      365 | 2024-11-30 | fnatic            | W   | 1.000      | 0.143        | 0.188 (0.027)    | -                | 1 (1.000) |    16.71 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           32 |      370 | 2024-11-29 | Liquid            | L   | 1.000      | -            | -                | -                | -         |    -2.33 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           31 |      567 | 2024-11-19 | FaZe              | L   | 1.000      | -            | -                | -                | -         |    -1.09 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           30 |      573 | 2024-11-18 | SINNERS           | W   | 1.000      | 0.143        | 0.082 (0.012)    | 0.826 (0.118)    | 1 (1.000) |    13.35 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           29 |      586 | 2024-11-17 | Sangal            | W   | 0.996      | 0.143        | 0.158 (0.023)    | 0.407 (0.058)    | 1 (0.996) |    23.24 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           28 |      597 | 2024-11-17 | Nemiga            | W   | 0.992      | 0.143        | 0.455 (0.064)    | 0.728 (0.103)    | 1 (0.992) |    21.55 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           27 |      610 | 2024-11-16 | FaZe              | L   | 0.990      | -            | -                | -                | -         |    -0.75 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           26 |     1130 | 2024-10-25 | fnatic            | L   | 0.838      | -            | -                | -                | -         |   -10.94 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           25 |     1158 | 2024-10-22 | 9z                | W   | 0.820      | 0.477        | 0.057 (0.022)    | 0.240 (0.094)    | 0 (0.000) |     9.80 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           24 |     1164 | 2024-10-22 | The MongolZ       | L   | 0.818      | -            | -                | -                | -         |    -0.65 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           23 |     1382 | 2024-10-11 | Passion UA        | L   | 0.745      | -            | -                | -                | -         |    -9.93 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           22 |     2318 | 2024-09-13 | Gaimin Gladiators | L   | 0.559      | -            | -                | -                | -         |   -12.56 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           21 |     2481 | 2024-09-07 | Zero Tenacity     | W   | 0.519      | 0.384        | 0.079 (0.016)    | 0.706 (0.141)    | 0 (0.000) |     7.30 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           20 |     2505 | 2024-09-06 | BetBoom           | W   | 0.513      | 0.384        | 0.108 (0.021)    | 0.502 (0.099)    | 0 (0.000) |     8.01 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           19 |     2552 | 2024-09-05 | ALTERNATE aTTaX   | W   | 0.505      | 0.384        | 0.071 (0.014)    | 0.786 (0.153)    | 0 (0.000) |     7.60 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           18 |     2644 | 2024-09-02 | GamerLegion       | W   | 0.485      | 0.384        | 0.171 (0.032)    | 0.685 (0.128)    | 0 (0.000) |    11.82 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           17 |     2726 | 2024-08-29 | Insilio           | W   | 0.460      | 0.384        | -                | 0.414 (0.073)    | 0 (0.000) |     2.73 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           16 |     2841 | 2024-08-27 | fnatic            | L   | 0.446      | -            | -                | -                | -         |    -5.23 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           15 |     2903 | 2024-08-26 | Eternal Fire      | L   | 0.440      | -            | -                | -                | -         |    -1.67 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           14 |     2919 | 2024-08-26 | HEROIC            | W   | 0.439      | 0.143        | 0.727 (0.046)    | -                | -         |    13.44 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           13 |     3012 | 2024-08-23 | paiN              | L   | 0.420      | -            | -                | -                | -         |    -1.01 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           12 |     3044 | 2024-08-22 | 9 Pandas          | W   | 0.412      | -            | -                | -                | -         |     7.33 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           11 |     3100 | 2024-08-21 | Passion UA        | W   | 0.406      | 0.143        | -                | 1.000 (0.058)    | -         |     8.73 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           10 |     3131 | 2024-08-21 | Johnny Speeds     | W   | 0.404      | -            | -                | -                | -         |     6.70 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            9 |     3166 | 2024-08-19 | 500               | W   | 0.394      | -            | -                | -                | -         |     4.17 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            8 |     3172 | 2024-08-19 | Ninjas in Pyjamas | W   | 0.393      | -            | -                | -                | -         |     7.99 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            7 |     3177 | 2024-08-19 | UNPAID            | W   | 0.393      | -            | -                | -                | -         |     6.47 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            6 |     3665 | 2024-08-03 | Johnny Speeds     | L   | 0.287      | -            | -                | -                | -         |    -4.09 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            5 |     3694 | 2024-08-02 | UNPAID            | W   | 0.280      | -            | -                | -                | -         |     4.89 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            4 |     3735 | 2024-08-01 | AMKAL             | W   | 0.274      | -            | -                | -                | -         |     2.21 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            3 |     3748 | 2024-08-01 | Ninjas in Pyjamas | L   | 0.273      | -            | -                | -                | -         |    -3.07 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            2 |     3780 | 2024-07-31 | 3DMAX             | L   | 0.267      | -            | -                | -                | -         |    -0.66 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            1 |     3804 | 2024-07-31 | FaZe              | L   | 0.265      | -            | -                | -                | -         |    -0.09 | Ax1Le, Boombl4, HeavyGod, ICY, interz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($24,019.88)
- Divide that value by the 5th highest value among all rosters ($344,999.34)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-03 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-09-07 |      0.519 | $20,000.00     | $10,386.57      |
| 2024-08-25 |      0.434 | $5,000.00      | $2,169.25       |
| 2024-08-04 |      0.293 | $5,000.00      | $1,464.07       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
