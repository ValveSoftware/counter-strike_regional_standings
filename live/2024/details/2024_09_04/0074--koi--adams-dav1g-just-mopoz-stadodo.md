### Roster Details<br />
Team Name: KOI<br />
Roster: adamS, dav1g, JUST, mopoz, stadodo<br />
Global Rank: [74](../../standings_global_2024_09_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_04.md)<br />
Regional Rank: [56]( ../../standings_europe_2024_09_04.md)<br />
<br />
Final Rank Value:  942.3<br />
<br />
Final Rank Value (942.3) = Starting Rank Value (967.4) + Head To Head Adjustments (-25.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.419[<sup>1</sup>](#table2)
- Bounty Collected: 0.400[<sup>2</sup>](#table1)
- Opponent Network: 0.187[<sup>2</sup>](#table1)
- LAN Wins: 0.139[<sup>2</sup>](#table1)

The average of these factors is 0.286<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 967.4
- 400 + ( ( 0.286 - 0.000 ) / ( 0.808 - 0.000 ) ) * 1600 = 967.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           44 |       26 | 2024-09-03 | G2                | L   | 1.000      | -            | -                | -                | -         |    -0.11 | adamS, dav1g, JUST, mopoz, stadodo |
|           43 |      430 | 2024-08-23 | TSM               | L   | 1.000      | -            | -                | -                | -         |   -10.75 | adamS, dav1g, JUST, mopoz, stadodo |
|           42 |      437 | 2024-08-23 | UNiTY             | L   | 1.000      | -            | -                | -                | -         |   -15.82 | adamS, dav1g, JUST, mopoz, stadodo |
|           41 |      472 | 2024-08-22 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |    -9.63 | adamS, dav1g, JUST, mopoz, stadodo |
|           40 |      505 | 2024-08-21 | Monte             | W   | 1.000      | 0.143        | -                | 0.668 (0.095)    | 0 (0.000) |    17.45 | adamS, dav1g, JUST, mopoz, stadodo |
|           39 |      553 | 2024-08-21 | ENCE              | W   | 1.000      | 0.143        | 0.132 (0.019)    | 0.345 (0.049)    | 0 (0.000) |    24.69 | adamS, dav1g, JUST, mopoz, stadodo |
|           38 |      596 | 2024-08-19 | Monte             | L   | 1.000      | -            | -                | -                | -         |   -12.83 | adamS, dav1g, JUST, mopoz, stadodo |
|           37 |      603 | 2024-08-19 | Gaimin Gladiators | W   | 1.000      | 0.143        | 0.020 (0.003)    | 0.473 (0.068)    | 0 (0.000) |    13.23 | adamS, dav1g, JUST, mopoz, stadodo |
|           36 |      700 | 2024-08-15 | HOTU              | L   | 1.000      | -            | -                | -                | -         |   -25.09 | adamS, dav1g, JUST, mopoz, stadodo |
|           35 |      750 | 2024-08-13 | B8                | L   | 1.000      | -            | -                | -                | -         |   -10.73 | adamS, dav1g, JUST, mopoz, stadodo |
|           34 |      804 | 2024-08-12 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |   -10.05 | adamS, dav1g, JUST, mopoz, stadodo |
|           33 |      992 | 2024-08-06 | Sashi             | L   | 1.000      | -            | -                | -                | -         |   -11.36 | adamS, dav1g, JUST, mopoz, stadodo |
|           32 |     1214 | 2024-07-31 | Zero Tenacity     | L   | 0.967      | -            | -                | -                | -         |    -9.93 | adamS, dav1g, JUST, mopoz, stadodo |
|           31 |     1375 | 2024-07-26 | EYEBALLERS        | W   | 0.933      | 0.500        | -                | 0.624 (0.291)    | 0 (0.000) |     8.07 | adamS, dav1g, JUST, mopoz, stadodo |
|           30 |     1645 | 2024-07-18 | Monte             | L   | 0.881      | -            | -                | -                | -         |   -17.42 | adamS, dav1g, JUST, mopoz, stadodo |
|           29 |     1786 | 2024-07-16 | Insilio           | W   | 0.867      | 0.500        | 0.023 (0.010)    | 0.626 (0.271)    | 0 (0.000) |    11.22 | adamS, dav1g, JUST, mopoz, stadodo |
|           28 |     2053 | 2024-06-16 | 9z                | L   | 0.667      | -            | -                | -                | -         |    -1.77 | adamS, dav1g, JUST, mopoz, stadodo |
|           27 |     2105 | 2024-06-14 | RED Canids        | W   | 0.656      | 0.548        | 0.051 (0.018)    | 0.655 (0.236)    | 1 (0.656) |    12.83 | adamS, dav1g, JUST, mopoz, stadodo |
|           26 |     2108 | 2024-06-14 | Imperial          | W   | 0.655      | 0.548        | 0.155 (0.056)    | 0.616 (0.221)    | 1 (0.655) |    14.98 | adamS, dav1g, JUST, mopoz, stadodo |
|           25 |     2265 | 2024-06-09 | Sangal            | L   | 0.621      | -            | -                | -                | -         |    -3.60 | adamS, dav1g, JUST, mopoz, stadodo |
|           24 |     2459 | 2024-06-06 | SINNERS           | W   | 0.601      | 0.500        | 0.084 (0.025)    | 1.000 (0.300)    | 0 (0.000) |    11.78 | adamS, dav1g, JUST, mopoz, stadodo |
|           23 |     2521 | 2024-06-05 | 3DMAX             | W   | 0.594      | 0.500        | 0.469 (0.139)    | 0.926 (0.275)    | 0 (0.000) |    18.05 | adamS, dav1g, JUST, mopoz, stadodo |
|           22 |     2653 | 2024-06-01 | ENCE              | L   | 0.567      | -            | -                | -                | -         |    -3.09 | adamS, dav1g, JUST, mopoz, stadodo |
|           21 |     2661 | 2024-06-01 | Zero Tenacity     | L   | 0.566      | -            | -                | -                | -         |    -5.92 | adamS, dav1g, JUST, mopoz, stadodo |
|           20 |     3328 | 2024-05-09 | B8                | L   | 0.412      | -            | -                | -                | -         |    -5.17 | adamS, dav1g, JUST, mopoz, stadodo |
|           19 |     3490 | 2024-05-01 | Zero Tenacity     | L   | 0.359      | -            | -                | -                | -         |    -4.38 | adamS, dav1g, JUST, mopoz, stadodo |
|           18 |     3810 | 2024-04-18 | ex-Guild Eagles   | L   | 0.274      | -            | -                | -                | -         |    -6.68 | adamS, dav1g, JUST, mopoz, stadodo |
|           17 |     3819 | 2024-04-18 | fnatic            | W   | 0.273      | 0.143        | 0.293 (0.011)    | -                | 0 (0.000) |     7.75 | adamS, dav1g, JUST, mopoz, stadodo |
|           16 |     3889 | 2024-04-16 | BLEED             | L   | 0.261      | -            | -                | -                | -         |    -3.15 | adamS, dav1g, JUST, mopoz, stadodo |
|           15 |     4022 | 2024-04-10 | RUSH B            | W   | 0.221      | -            | -                | -                | -         |     2.49 | adamS, dav1g, JUST, mopoz, stadodo |
|           14 |     4076 | 2024-04-09 | Aurora            | W   | 0.214      | 0.500        | 0.299 (0.032)    | 0.636 (0.068)    | -         |     6.35 | adamS, dav1g, JUST, mopoz, stadodo |
|           13 |     4082 | 2024-04-09 | Apeks             | L   | 0.214      | -            | -                | -                | -         |    -4.97 | adamS, dav1g, JUST, mopoz, stadodo |
|           12 |     4110 | 2024-04-08 | GUN5              | W   | 0.207      | -            | -                | -                | -         |     0.26 | adamS, dav1g, JUST, mopoz, stadodo |
|           11 |     4115 | 2024-04-08 | fnatic            | L   | 0.206      | -            | -                | -                | -         |    -0.63 | adamS, dav1g, JUST, mopoz, stadodo |
|           10 |     4216 | 2024-04-04 | NOM               | W   | 0.180      | -            | -                | -                | -         |     0.49 | adamS, dav1g, JUST, mopoz, stadodo |
|            9 |     4250 | 2024-04-03 | 9INE              | W   | 0.174      | -            | -                | -                | -         |     0.41 | adamS, dav1g, JUST, mopoz, stadodo |
|            8 |     4287 | 2024-04-02 | TSM               | W   | 0.168      | -            | -                | -                | -         |     0.74 | adamS, dav1g, JUST, mopoz, stadodo |
|            7 |     4353 | 2024-03-28 | EYEBALLERS        | L   | 0.133      | -            | -                | -                | -         |    -2.55 | adamS, dav1g, JUST, mopoz, stadodo |
|            6 |     4525 | 2024-03-18 | FURIA             | L   | 0.067      | -            | -                | -                | -         |    -0.04 | adamS, dav1g, JUST, mopoz, stadodo |
|            5 |     4542 | 2024-03-17 | ENCE              | L   | 0.061      | -            | -                | -                | -         |    -0.30 | adamS, dav1g, JUST, mopoz, stadodo |
|            4 |     4557 | 2024-03-17 | SAW               | L   | 0.060      | -            | -                | -                | -         |    -0.07 | adamS, dav1g, JUST, mopoz, stadodo |
|            3 |     4648 | 2024-03-13 | Sangal            | W   | 0.035      | 0.500        | 0.248 (0.004)    | -                | -         |     0.89 | adamS, dav1g, JUST, mopoz, stadodo |
|            2 |     4703 | 2024-03-11 | B8                | L   | 0.021      | -            | -                | -                | -         |    -0.26 | adamS, dav1g, JUST, mopoz, stadodo |
|            1 |     4709 | 2024-03-11 | Apeks             | L   | 0.020      | -            | -                | -                | -         |    -0.47 | adamS, dav1g, JUST, mopoz, stadodo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,941.46)
- Divide that value by the 5th highest value among all rosters ($315,326.30)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.669 | $7,000.00      | $4,683.71       |
| 2024-06-09 |      0.621 | $12,000.00     | $7,451.17       |
| 2024-03-20 |      0.081 | $10,000.00     | $806.59         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
