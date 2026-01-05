### Roster Details<br />
Team Name: PARIVISION<br />
Roster: AW, BELCHONOKK, Jame, nota, xiELO<br />
Global Rank: [16](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_01_05.md)<br />
Regional Rank: [13]( ../../standings_europe_2026_01_05.md)<br />
<br />
Final Rank Value:  1570.8<br />
<br />
Final Rank Value (1570.8) = Starting Rank Value (1522.6) + Head To Head Adjustments (48.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.558[<sup>1</sup>](#table2)
- Bounty Collected: 0.614[<sup>2</sup>](#table1)
- Opponent Network: 0.267[<sup>2</sup>](#table1)
- LAN Wins: 0.826[<sup>2</sup>](#table1)

The average of these factors is 0.566<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1522.6
- 400 + ( ( 0.566 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1522.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           54 |      367 | 2025-12-05 | 3DMAX             | L   | 0.995      | -            | -                | -                | -         |   -14.16 | AW, BELCHONOKK, Jame, nota, xiELO |
|           53 |      391 | 2025-12-04 | Natus Vincere     | L   | 0.988      | -            | -                | -                | -         |    -6.22 | AW, BELCHONOKK, Jame, nota, xiELO |
|           52 |      412 | 2025-12-04 | MOUZ              | L   | 0.986      | -            | -                | -                | -         |    -6.14 | AW, BELCHONOKK, Jame, nota, xiELO |
|           51 |      455 | 2025-12-01 | Ninjas in Pyjamas | W   | 0.967      | 0.809        | 0.213 (0.166)    | 0.530 (0.414)    | 1 (0.967) |    12.77 | AW, BELCHONOKK, Jame, nota, xiELO |
|           50 |      474 | 2025-11-30 | Aurora            | W   | 0.960      | 0.809        | 1.000 (0.776)    | 0.364 (0.283)    | 1 (0.960) |    22.20 | AW, BELCHONOKK, Jame, nota, xiELO |
|           49 |      498 | 2025-11-29 | Liquid            | W   | 0.955      | 0.809        | 0.552 (0.426)    | 0.406 (0.314)    | 1 (0.955) |    19.15 | AW, BELCHONOKK, Jame, nota, xiELO |
|           48 |      528 | 2025-11-29 | TYLOO             | L   | 0.952      | -            | -                | -                | -         |   -26.71 | AW, BELCHONOKK, Jame, nota, xiELO |
|           47 |      566 | 2025-11-27 | Legacy            | W   | 0.942      | 0.624        | 1.000 (0.588)    | 0.436 (0.257)    | 1 (0.942) |    19.50 | AW, BELCHONOKK, Jame, nota, xiELO |
|           46 |      575 | 2025-11-26 | GamerLegion       | W   | 0.935      | 0.624        | 0.239 (0.140)    | 0.463 (0.270)    | 1 (0.935) |    12.07 | AW, BELCHONOKK, Jame, nota, xiELO |
|           45 |      606 | 2025-11-25 | B8                | L   | 0.926      | -            | -                | -                | -         |    -9.86 | AW, BELCHONOKK, Jame, nota, xiELO |
|           44 |      621 | 2025-11-24 | M80               | L   | 0.921      | -            | -                | -                | -         |   -17.38 | AW, BELCHONOKK, Jame, nota, xiELO |
|           43 |      642 | 2025-11-24 | The Huns          | W   | 0.919      | 0.624        | -                | 0.459 (0.263)    | 1 (0.919) |     2.32 | AW, BELCHONOKK, Jame, nota, xiELO |
|           42 |      759 | 2025-11-20 | SINNERS           | W   | 0.895      | -            | -                | -                | -         |     4.88 | AW, BELCHONOKK, Jame, nota, xiELO |
|           41 |      811 | 2025-11-18 | BC.Game           | W   | 0.881      | -            | -                | -                | -         |     1.55 | AW, BELCHONOKK, Jame, nota, xiELO |
|           40 |     1981 | 2025-10-12 | Inner Circle      | W   | 0.633      | -            | -                | -                | -         |     5.94 | AW, BELCHONOKK, Jame, nota, xiELO |
|           39 |     2000 | 2025-10-11 | Gentle Mates      | W   | 0.626      | 0.435        | 0.158 (0.043)    | -                | -         |     8.82 | AW, BELCHONOKK, Jame, nota, xiELO |
|           38 |     2067 | 2025-10-09 | GUN5              | W   | 0.614      | 0.435        | -                | 0.816 (0.218)    | -         |     3.62 | AW, BELCHONOKK, Jame, nota, xiELO |
|           37 |     2135 | 2025-10-08 | FAVBET            | W   | 0.606      | -            | -                | -                | -         |     0.93 | AW, BELCHONOKK, Jame, nota, xiELO |
|           36 |     2576 | 2025-09-28 | BetBoom           | W   | 0.540      | 0.435        | 0.229 (0.054)    | 0.933 (0.219)    | 1 (0.540) |     7.97 | AW, BELCHONOKK, Jame, nota, xiELO |
|           35 |     2633 | 2025-09-27 | 33                | W   | 0.533      | -            | -                | -                | 1 (0.533) |     1.05 | AW, BELCHONOKK, Jame, nota, xiELO |
|           34 |     2676 | 2025-09-26 | 9BOOMPRO          | W   | 0.527      | -            | -                | -                | 1 (0.527) |     0.38 | AW, BELCHONOKK, Jame, nota, xiELO |
|           33 |     2722 | 2025-09-25 | Nuclear TigeRES   | W   | 0.521      | 0.435        | -                | 0.996 (0.225)    | 1 (0.521) |     0.85 | AW, BELCHONOKK, Jame, nota, xiELO |
|           32 |     2866 | 2025-09-20 | Gentle Mates      | L   | 0.485      | -            | -                | -                | -         |    -8.34 | AW, BELCHONOKK, Jame, nota, xiELO |
|           31 |     2889 | 2025-09-19 | Ninjas in Pyjamas | L   | 0.480      | -            | -                | -                | -         |    -7.97 | AW, BELCHONOKK, Jame, nota, xiELO |
|           30 |     2932 | 2025-09-18 | B8                | W   | 0.472      | 0.769        | 0.259 (0.094)    | -                | -         |    10.89 | AW, BELCHONOKK, Jame, nota, xiELO |
|           29 |     3208 | 2025-09-11 | 9z                | L   | 0.426      | -            | -                | -                | -         |   -11.80 | AW, BELCHONOKK, Jame, nota, xiELO |
|           28 |     3313 | 2025-09-09 | ECSTATIC          | W   | 0.412      | 0.729        | 0.108 (0.033)    | 0.680 (0.204)    | -         |     3.54 | AW, BELCHONOKK, Jame, nota, xiELO |
|           27 |     3472 | 2025-09-01 | BetBoom           | W   | 0.361      | 0.384        | 0.229 (0.032)    | -                | -         |     5.77 | AW, BELCHONOKK, Jame, nota, xiELO |
|           26 |     3484 | 2025-08-31 | 9INE              | W   | 0.354      | -            | -                | -                | -         |     4.00 | AW, BELCHONOKK, Jame, nota, xiELO |
|           25 |     3544 | 2025-08-29 | ex-Zero Tenacity  | W   | 0.341      | -            | -                | -                | -         |     0.40 | AW, BELCHONOKK, Jame, nota, xiELO |
|           24 |     3583 | 2025-08-28 | OG                | W   | 0.334      | -            | -                | -                | -         |     1.96 | AW, BELCHONOKK, Jame, nota, xiELO |
|           23 |     3609 | 2025-08-27 | 9INE              | L   | 0.328      | -            | -                | -                | -         |    -6.72 | AW, BELCHONOKK, Jame, nota, xiELO |
|           22 |     3809 | 2025-08-17 | ECSTATIC          | W   | 0.261      | -            | -                | -                | -         |     2.36 | AW, BELCHONOKK, Jame, nota, xiELO |
|           21 |     3845 | 2025-08-16 | ENCE              | W   | 0.254      | -            | -                | -                | -         |     2.54 | AW, BELCHONOKK, Jame, nota, xiELO |
|           20 |     3931 | 2025-08-14 | Gentle Mates      | W   | 0.241      | -            | -                | -                | -         |     3.69 | AW, BELCHONOKK, Jame, nota, xiELO |
|           19 |     3984 | 2025-08-13 | ENCE              | W   | 0.234      | -            | -                | -                | -         |     2.38 | AW, BELCHONOKK, Jame, nota, xiELO |
|           18 |     4001 | 2025-08-13 | fnatic            | W   | 0.233      | -            | -                | -                | -         |     3.72 | AW, BELCHONOKK, Jame, nota, xiELO |
|           17 |     4049 | 2025-08-12 | Sashi             | W   | 0.227      | -            | -                | -                | -         |     1.61 | AW, BELCHONOKK, Jame, nota, xiELO |
|           16 |     4128 | 2025-08-10 | OG                | L   | 0.214      | -            | -                | -                | -         |    -5.62 | AW, BELCHONOKK, Jame, nota, xiELO |
|           15 |     4151 | 2025-08-10 | fnatic            | W   | 0.212      | -            | -                | -                | -         |     3.39 | AW, BELCHONOKK, Jame, nota, xiELO |
|           14 |     4159 | 2025-08-09 | Partizan          | W   | 0.207      | -            | -                | -                | -         |     0.09 | AW, BELCHONOKK, Jame, nota, xiELO |
|           13 |     4187 | 2025-08-08 | CYBERSHOKE        | W   | 0.199      | -            | -                | -                | -         |     2.23 | AW, BELCHONOKK, Jame, nota, xiELO |
|           12 |     4465 | 2025-07-21 | ex-Zero Tenacity  | L   | 0.080      | -            | -                | -                | -         |    -2.43 | AW, BELCHONOKK, Jame, nota, xiELO |
|           11 |     4554 | 2025-07-17 | Inner Circle      | L   | 0.053      | -            | -                | -                | -         |    -1.17 | AW, BELCHONOKK, Jame, nota, xiELO |
|           10 |     4558 | 2025-07-17 | Nemiga            | W   | 0.053      | -            | -                | -                | -         |     0.14 | AW, BELCHONOKK, Jame, nota, xiELO |
|            9 |     4576 | 2025-07-16 | Sashi             | W   | 0.048      | -            | -                | -                | -         |     0.33 | AW, BELCHONOKK, Jame, nota, xiELO |
|            8 |     4582 | 2025-07-16 | Passion UA        | W   | 0.047      | -            | -                | -                | -         |     0.01 | AW, BELCHONOKK, Jame, nota, xiELO |
|            7 |     4597 | 2025-07-15 | Nemiga            | L   | 0.041      | -            | -                | -                | -         |    -1.18 | AW, BELCHONOKK, Jame, nota, xiELO |
|            6 |     4607 | 2025-07-15 | FUT               | W   | 0.040      | -            | -                | -                | -         |     0.76 | AW, BELCHONOKK, Jame, nota, xiELO |
|            5 |     4616 | 2025-07-14 | ENCE              | W   | 0.035      | -            | -                | -                | -         |     0.35 | AW, BELCHONOKK, Jame, nota, xiELO |
|            4 |     4641 | 2025-07-13 | Gentle Mates      | L   | 0.028      | -            | -                | -                | -         |    -0.45 | AW, BELCHONOKK, Jame, nota, xiELO |
|            3 |     4648 | 2025-07-13 | GUN5              | W   | 0.026      | -            | -                | -                | -         |     0.18 | AW, BELCHONOKK, Jame, nota, xiELO |
|            2 |     4673 | 2025-07-12 | KHAN              | W   | 0.019      | -            | -                | -                | -         |     0.01 | AW, BELCHONOKK, Jame, nota, xiELO |
|            1 |     4701 | 2025-07-11 | Dziuseppe         | W   | 0.013      | -            | -                | -                | -         |     0.01 | AW, BELCHONOKK, Jame, nota, xiELO |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($69,013.10)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-14 |      1.000 | $20,000.00     | $20,000.00      |
| 2025-10-12 |      0.633 | $25,000.00     | $15,814.27      |
| 2025-09-28 |      0.540 | $30,000.00     | $16,202.39      |
| 2025-09-21 |      0.494 | $20,000.00     | $9,872.70       |
| 2025-09-01 |      0.361 | $12,000.00     | $4,331.19       |
| 2025-08-10 |      0.214 | $10,000.00     | $2,137.91       |
| 2025-07-13 |      0.028 | $23,443.00     | $654.64         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
