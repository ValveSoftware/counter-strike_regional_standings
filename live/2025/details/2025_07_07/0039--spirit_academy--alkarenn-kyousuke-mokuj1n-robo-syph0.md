### Roster Details<br />
Team Name: Spirit Academy<br />
Roster: alkarenn, kyousuke, Mokuj1n, robo, syph0<br />
Global Rank: [39](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [28]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  1102.1<br />
<br />
Final Rank Value (1102.1) = Starting Rank Value (1090.3) + Head To Head Adjustments (11.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.467[<sup>1</sup>](#table2)
- Bounty Collected: 0.381[<sup>2</sup>](#table1)
- Opponent Network: 0.283[<sup>2</sup>](#table1)
- LAN Wins: 0.349[<sup>2</sup>](#table1)

The average of these factors is 0.370<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1090.3
- 400 + ( ( 0.370 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 1090.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           47 |      473 | 2025-05-27 | Passion UA    | L   | 0.925      | -            | -                | -                | -         |   -12.07 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|           46 |      476 | 2025-05-26 | Monte         | W   | 0.921      | 0.384        | -                | 0.651 (0.230)    | 0 (0.000) |     5.89 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|           45 |      478 | 2025-05-26 | Iberian Soul  | L   | 0.920      | -            | -                | -                | -         |   -18.47 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|           44 |      578 | 2025-05-21 | 9INE          | W   | 0.884      | 0.384        | -                | 0.897 (0.305)    | 0 (0.000) |    14.56 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|           43 |      589 | 2025-05-20 | 500           | W   | 0.880      | 0.384        | 0.036 (0.012)    | -                | 0 (0.000) |     7.59 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|           42 |      638 | 2025-05-18 | Passion UA    | W   | 0.866      | 0.435        | 0.095 (0.036)    | 0.974 (0.367)    | 0 (0.000) |    17.35 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|           41 |      698 | 2025-05-15 | FAVBET        | W   | 0.847      | 0.384        | -                | 0.742 (0.242)    | 0 (0.000) |     7.84 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|           40 |      766 | 2025-05-13 | FORZE Reload  | W   | 0.832      | -            | -                | -                | 0 (0.000) |     1.39 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|           39 |      789 | 2025-05-12 | Zero Tenacity | W   | 0.826      | 0.435        | -                | 0.839 (0.301)    | -         |     7.68 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|           38 |      795 | 2025-05-12 | Monte         | L   | 0.825      | -            | -                | -                | -         |   -19.32 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|           37 |      846 | 2025-05-10 | ENCE          | L   | 0.812      | -            | -                | -                | -         |   -12.14 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|           36 |      895 | 2025-05-08 | ARCRED        | W   | 0.799      | -            | -                | -                | 1 (0.799) |     6.18 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|           35 |      915 | 2025-05-07 | Zero Tenacity | L   | 0.794      | -            | -                | -                | -         |   -18.66 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|           34 |      921 | 2025-05-07 | GUN5          | W   | 0.793      | 0.435        | 0.034 (0.012)    | -                | 1 (0.793) |     6.54 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|           33 |      951 | 2025-05-06 | FAVBET        | W   | 0.787      | 0.500        | -                | 0.742 (0.292)    | -         |     5.74 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|           32 |      967 | 2025-05-06 | PARIVISION    | W   | 0.785      | 0.435        | 0.076 (0.026)    | 1.000 (0.341)    | 1 (0.785) |    11.24 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|           31 |      982 | 2025-05-05 | ARCRED        | W   | 0.780      | -            | -                | -                | 1 (0.780) |     5.40 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|           30 |     1038 | 2025-05-03 | OG            | W   | 0.765      | 0.354        | 0.054 (0.015)    | -                | -         |    13.63 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|           29 |     1201 | 2025-04-26 | NAVI Junior   | W   | 0.720      | 0.354        | 0.346 (0.088)    | 0.913 (0.233)    | -         |    14.05 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|           28 |     1318 | 2025-04-18 | LA MASIA      | W   | 0.667      | -            | -                | -                | -         |     1.97 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|           27 |     1332 | 2025-04-18 | Metizport     | W   | 0.665      | 0.657        | 0.027 (0.012)    | -                | -         |     8.69 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|           26 |     1338 | 2025-04-18 | ENCE          | L   | 0.664      | -            | -                | -                | -         |    -8.67 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|           25 |     1351 | 2025-04-17 | BetBoom       | L   | 0.660      | -            | -                | -                | -         |    -7.77 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|           24 |     1358 | 2025-04-17 | Nexus         | L   | 0.659      | -            | -                | -                | -         |   -15.03 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|           23 |     1527 | 2025-04-09 | Astrum        | W   | 0.608      | 0.500        | 0.044 (0.013)    | 0.927 (0.282)    | -         |     6.87 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|           22 |     1574 | 2025-04-08 | TPuDCATb TPu  | L   | 0.601      | -            | -                | -                | -         |   -15.22 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|           21 |     2104 | 2025-03-26 | Astrum        | W   | 0.514      | 0.500        | 0.044 (0.011)    | 0.927 (0.238)    | -         |     5.34 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|           20 |     2352 | 2025-03-18 | Rebels        | W   | 0.461      | -            | -                | -                | -         |     2.31 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|           19 |     2531 | 2025-03-10 | BetBoom       | L   | 0.406      | -            | -                | -                | -         |    -6.05 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|           18 |     2576 | 2025-03-09 | Nemiga        | L   | 0.400      | -            | -                | -                | -         |    -4.12 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|           17 |     2661 | 2025-03-08 | BetBoom       | W   | 0.393      | -            | -                | -                | -         |     6.63 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|           16 |     2707 | 2025-03-07 | Sashi         | W   | 0.387      | -            | -                | -                | -         |     4.95 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|           15 |     2781 | 2025-03-06 | BC.Game       | L   | 0.380      | -            | -                | -                | -         |    -8.58 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|           14 |     2817 | 2025-03-05 | fnatic        | L   | 0.374      | -            | -                | -                | -         |    -2.50 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|           13 |     2866 | 2025-03-03 | Monte         | W   | 0.359      | -            | -                | -                | -         |     1.50 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|           12 |     2908 | 2025-03-01 | NAVI Junior   | L   | 0.347      | -            | -                | -                | -         |    -5.68 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|           11 |     2958 | 2025-02-27 | Zero Tenacity | W   | 0.332      | -            | -                | -                | -         |     2.64 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|           10 |     2994 | 2025-02-26 | Iberian Soul  | W   | 0.327      | 0.500        | 0.077 (0.013)    | -                | -         |     4.27 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|            9 |     3069 | 2025-02-24 | ARCRED        | L   | 0.313      | -            | -                | -                | -         |    -7.57 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|            8 |     3237 | 2025-02-18 | TPuDCATb TPu  | W   | 0.274      | -            | -                | -                | -         |     1.56 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|            7 |     3389 | 2025-02-12 | ECLOT         | L   | 0.234      | -            | -                | -                | -         |    -4.39 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|            6 |     3553 | 2025-02-08 | Alliance      | W   | 0.205      | -            | -                | -                | -         |     2.89 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|            5 |     3597 | 2025-02-06 | fnatic        | L   | 0.194      | -            | -                | -                | -         |    -1.16 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|            4 |     3673 | 2025-02-03 | moneyF        | W   | 0.174      | -            | -                | -                | -         |     0.19 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|            3 |     3684 | 2025-02-02 | ECSTATIC      | W   | 0.167      | -            | -                | -                | -         |     4.32 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|            2 |     3830 | 2025-01-24 | Zero Tenacity | L   | 0.108      | -            | -                | -                | -         |    -2.51 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |
|            1 |     3899 | 2025-01-22 | B8            | W   | 0.094      | -            | -                | -                | -         |     2.43 | alkarenn, kyousuke, Mokuj1n, robo, syph0 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($36,164.80)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-27 |      0.927 | $3,000.00      | $2,780.42       |
| 2025-05-11 |      0.821 | $5,500.00      | $4,515.69       |
| 2025-05-11 |      0.820 | $1,000.00      | $819.82         |
| 2025-05-08 |      0.799 | $30,000.00     | $23,965.16      |
| 2025-04-20 |      0.681 | $6,000.00      | $4,083.72       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
