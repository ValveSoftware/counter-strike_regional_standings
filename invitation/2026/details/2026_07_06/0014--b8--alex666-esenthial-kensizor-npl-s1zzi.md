### Roster Details<br />
Team Name: B8<br />
Roster: alex666, esenthial, kensizor, npl, s1zzi<br />
Global Rank: [14](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [10]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  1563.0<br />
<br />
Final Rank Value (1563.0) = Starting Rank Value (1652.1) + Head To Head Adjustments (-89.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.668[<sup>1</sup>](#table2)
- Bounty Collected: 0.643[<sup>2</sup>](#table1)
- Opponent Network: 0.367[<sup>2</sup>](#table1)
- LAN Wins: 0.979[<sup>2</sup>](#table1)

The average of these factors is 0.664<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1652.1
- 400 + ( ( 0.664 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 1652.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           51 |      331 | 2026-06-13 | FUT               | L   | 1.000      | -            | -                | -                | -         |   -10.87 | alex666, esenthial, kensizor, npl, s1zzi    |
|           50 |      373 | 2026-06-12 | The MongolZ       | L   | 1.000      | -            | -                | -                | -         |   -12.76 | alex666, esenthial, kensizor, npl, s1zzi    |
|           49 |      386 | 2026-06-11 | FURIA             | L   | 1.000      | -            | -                | -                | -         |    -9.33 | alex666, esenthial, kensizor, npl, s1zzi    |
|           48 |      416 | 2026-06-09 | BIG               | W   | 1.000      | 0.809        | 0.093 (0.075)    | 0.693 (0.560)    | 1 (1.000) |     7.19 | alex666, esenthial, kensizor, npl, s1zzi    |
|           47 |      443 | 2026-06-08 | MIBR              | W   | 1.000      | 0.809        | 0.244 (0.198)    | 0.412 (0.333)    | 1 (1.000) |    13.23 | alex666, esenthial, kensizor, npl, s1zzi    |
|           46 |      458 | 2026-06-07 | GamerLegion       | W   | 1.000      | 0.809        | 0.499 (0.404)    | 0.445 (0.360)    | 1 (1.000) |    17.25 | alex666, esenthial, kensizor, npl, s1zzi    |
|           45 |      481 | 2026-06-06 | M80               | L   | 1.000      | -            | -                | -                | -         |   -23.18 | alex666, esenthial, kensizor, npl, s1zzi    |
|           44 |      502 | 2026-06-06 | FUT               | L   | 0.999      | -            | -                | -                | -         |   -12.04 | alex666, esenthial, kensizor, npl, s1zzi    |
|           43 |      559 | 2026-06-03 | M80               | W   | 0.981      | 0.624        | -                | 0.558 (0.342)    | 1 (0.981) |     7.21 | alex666, esenthial, kensizor, npl, s1zzi    |
|           42 |      591 | 2026-06-02 | THUNDER dOWNUNDER | W   | 0.974      | -            | -                | -                | 1 (0.974) |     2.22 | alex666, esenthial, kensizor, npl, s1zzi    |
|           41 |      600 | 2026-06-02 | TYLOO             | W   | 0.972      | 0.624        | -                | 0.629 (0.382)    | 1 (0.972) |     7.35 | alex666, esenthial, kensizor, npl, s1zzi    |
|           40 |     1028 | 2026-05-22 | MOUZ              | L   | 0.899      | -            | -                | -                | -         |    -6.60 | alex666, esenthial, kensizor, npl, s1zzi    |
|           39 |     1038 | 2026-05-21 | MIBR              | L   | 0.897      | -            | -                | -                | -         |   -16.36 | alex666, esenthial, kensizor, npl, s1zzi    |
|           38 |     1113 | 2026-05-20 | The MongolZ       | W   | 0.885      | 1.000        | 0.499 (0.442)    | 0.407 (0.360)    | 1 (0.885) |    16.74 | alex666, esenthial, kensizor, npl, s1zzi    |
|           37 |     1121 | 2026-05-19 | Ninjas in Pyjamas | W   | 0.884      | 1.000        | 0.104 (0.092)    | 0.345 (0.304)    | 1 (0.884) |     5.07 | alex666, esenthial, kensizor, npl, s1zzi    |
|           36 |     1273 | 2026-05-13 | Vitality          | L   | 0.842      | -            | -                | -                | -         |    -3.16 | alex666, esenthial, kensizor, npl, s1zzi    |
|           35 |     1284 | 2026-05-13 | FUT               | W   | 0.840      | 1.000        | 0.678 (0.570)    | -                | 1 (0.840) |    17.04 | alex666, esenthial, kensizor, npl, s1zzi    |
|           34 |     1325 | 2026-05-12 | BC.Game           | W   | 0.834      | -            | -                | -                | 1 (0.834) |     0.66 | alex666, esenthial, kensizor, npl, s1zzi    |
|           33 |     1362 | 2026-05-11 | BetBoom           | L   | 0.827      | -            | -                | -                | -         |   -11.13 | alex666, esenthial, kensizor, npl, s1zzi    |
|           32 |     2202 | 2026-04-15 | Aurora            | L   | 0.654      | -            | -                | -                | -         |    -6.71 | alex666, esenthial, kensizor, npl, s1zzi    |
|           31 |     2217 | 2026-04-14 | Passion UA        | W   | 0.648      | -            | -                | -                | -         |     1.54 | alex666, esenthial, kensizor, npl, s1zzi    |
|           30 |     2238 | 2026-04-13 | Natus Vincere     | L   | 0.641      | -            | -                | -                | -         |    -3.66 | alex666, esenthial, kensizor, npl, s1zzi    |
|           29 |     2341 | 2026-04-09 | FUT               | L   | 0.613      | -            | -                | -                | -         |    -6.64 | alex666, esenthial, kensizor, npl, s1zzi    |
|           28 |     2373 | 2026-04-08 | Legacy            | W   | 0.606      | 1.000        | 1.000 (0.606)    | 0.597 (0.361)    | -         |    15.19 | alex666, esenthial, kensizor, npl, s1zzi    |
|           27 |     2411 | 2026-04-07 | Inner Circle      | W   | 0.599      | 1.000        | 0.142 (0.085)    | 0.608 (0.364)    | -         |     4.82 | alex666, esenthial, kensizor, npl, s1zzi    |
|           26 |     2441 | 2026-04-06 | 3DMAX             | L   | 0.592      | -            | -                | -                | -         |   -15.48 | alex666, esenthial, kensizor, npl, s1zzi    |
|           25 |     2499 | 2026-04-05 | Astralis          | L   | 0.585      | -            | -                | -                | -         |    -9.23 | alex666, esenthial, kensizor, npl, s1zzi    |
|           24 |     2574 | 2026-04-04 | Wildcard          | W   | 0.579      | 1.000        | 0.109 (0.063)    | 0.517 (0.299)    | -         |     2.55 | alex666, esenthial, kensizor, npl, s1zzi    |
|           23 |     2711 | 2026-04-02 | BESTIA            | W   | 0.568      | -            | -                | -                | -         |     1.71 | alex666, esenthial, kensizor, npl, s1zzi    |
|           22 |     2734 | 2026-04-02 | 3DMAX             | W   | 0.567      | -            | -                | -                | -         |     2.96 | alex666, esenthial, kensizor, npl, s1zzi    |
|           21 |     2768 | 2026-04-02 | Falcons Force     | W   | 0.565      | -            | -                | -                | -         |     0.22 | alex666, esenthial, kensizor, npl, s1zzi    |
|           20 |     2796 | 2026-04-01 | Phantom           | W   | 0.561      | -            | -                | -                | -         |     0.81 | alex666, esenthial, kensizor, npl, s1zzi    |
|           19 |     2819 | 2026-04-01 | 3DMAX             | L   | 0.560      | -            | -                | -                | -         |   -14.82 | alex666, esenthial, kensizor, npl, s1zzi    |
|           18 |     2861 | 2026-04-01 | Falcons Force     | W   | 0.558      | -            | -                | -                | -         |     0.17 | alex666, esenthial, kensizor, npl, s1zzi    |
|           17 |     2886 | 2026-03-31 | Phantom           | W   | 0.554      | -            | -                | -                | -         |     0.72 | alex666, esenthial, kensizor, npl, s1zzi    |
|           16 |     2911 | 2026-03-31 | AM                | W   | 0.554      | -            | -                | -                | -         |     1.50 | alex666, esenthial, kensizor, npl, s1zzi    |
|           15 |     2923 | 2026-03-31 | Z7                | W   | 0.553      | -            | -                | -                | -         |     0.03 | alex666, esenthial, kensizor, npl, s1zzi    |
|           14 |     2942 | 2026-03-31 | WAZABI            | L   | 0.552      | -            | -                | -                | -         |   -17.12 | alex666, esenthial, kensizor, npl, s1zzi    |
|           13 |     2957 | 2026-03-31 | maquinas          | W   | 0.552      | -            | -                | -                | -         |     0.02 | alex666, esenthial, kensizor, npl, s1zzi    |
|           12 |     3620 | 2026-03-20 | NRG               | L   | 0.479      | -            | -                | -                | -         |   -14.21 | alex666, esenthial, kensizor, npl, s1zzi    |
|           11 |     3695 | 2026-03-18 | Natus Vincere     | L   | 0.467      | -            | -                | -                | -         |    -3.56 | alex666, esenthial, kensizor, npl, s1zzi    |
|           10 |     4121 | 2026-03-09 | FUT               | L   | 0.406      | -            | -                | -                | -         |    -5.56 | alex666, esenthial, kensizor, npl, s1zzi    |
|            9 |     4190 | 2026-03-08 | Natus Vincere     | L   | 0.400      | -            | -                | -                | -         |    -3.34 | alex666, esenthial, kensizor, npl, s1zzi    |
|            8 |     4222 | 2026-03-07 | Spirit            | L   | 0.395      | -            | -                | -                | -         |    -1.79 | alex666, esenthial, kensizor, npl, s1zzi    |
|            7 |     4262 | 2026-03-06 | FURIA             | W   | 0.389      | 0.805        | 0.820 (0.257)    | -                | -         |     8.86 | alex666, esenthial, kensizor, npl, s1zzi    |
|            6 |     5168 | 2026-02-17 | Aurora            | L   | 0.273      | -            | -                | -                | -         |    -3.42 | alex666, esenthial, kensizor, npl, s1zzi    |
|            5 |     5206 | 2026-02-16 | The MongolZ       | L   | 0.266      | -            | -                | -                | -         |    -4.14 | alex666, esenthial, kensizor, npl, s1zzi    |
|            4 |     5253 | 2026-02-15 | HEROIC            | W   | 0.261      | -            | -                | -                | -         |     0.91 | alex666, esenthial, kensizor, npl, s1zzi    |
|            3 |     5292 | 2026-02-14 | FURIA             | L   | 0.255      | -            | -                | -                | -         |    -2.24 | alex666, esenthial, kensizor, npl, s1zzi    |
|            2 |     5853 | 2026-01-29 | paiN              | L   | 0.146      | -            | -                | -                | -         |    -3.50 | alex666, esenthial, kensizor, npl, segukawa |
|            1 |     5873 | 2026-01-28 | NRG               | L   | 0.140      | -            | -                | -                | -         |    -4.20 | alex666, esenthial, kensizor, npl, segukawa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($179,468.28)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.32) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-21 |      1.000 | $20,000.00     | $20,000.00      |
| 2026-05-24 |      0.912 | $45,000.00     | $41,031.67      |
| 2026-05-17 |      0.868 | $42,000.00     | $36,467.65      |
| 2026-04-19 |      0.681 | $20,000.00     | $13,624.42      |
| 2026-04-11 |      0.627 | $62,500.00     | $39,203.57      |
| 2026-04-02 |      0.568 | $5,769.00      | $3,276.02       |
| 2026-03-29 |      0.539 | $20,000.00     | $10,789.28      |
| 2026-03-10 |      0.415 | $21,500.00     | $8,921.72       |
| 2026-02-22 |      0.308 | $18,750.00     | $5,767.74       |
| 2026-01-30 |      0.154 | $2,500.00      | $386.22         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
