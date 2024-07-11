### Roster Details<br />
Team Name: FURIA<br />
Roster: chelo, FalleN, KSCERATO, kye, yuurih<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [17](../standings_global.md)<br />
Regional Rank: [4]( ../standings_americas.md)<br />
Final Rank Value:  1556.6<br />
<br />
Final Rank Value (1556.6) = Starting Rank Value (1666.5) + Head To Head Adjustments (-109.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.627[<sup>1</sup>](#table2)
- Bounty Collected: 0.579[<sup>2</sup>](#table1)
- Opponent Network: 0.334[<sup>2</sup>](#table1)
- LAN Wins: 0.862[<sup>2</sup>](#table1)

The average of these factors is 0.600<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1666.5
- 400 + ( ( 0.600 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1666.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           42 |      443 | 2024-06-08 | Ninjas in Pyjamas  | L   | 0.980      | -            | -                | -                | -         |   -10.32 | chelo, FalleN, KSCERATO, kye, yuurih |
|           41 |      566 | 2024-06-06 | Complexity         | W   | 0.967      | 0.715        | 0.440 (0.304)    | 0.427 (0.296)    | 1 (0.967) |    22.61 | chelo, FalleN, KSCERATO, kye, yuurih |
|           40 |      578 | 2024-06-06 | fnatic             | W   | 0.966      | 0.715        | 0.298 (0.206)    | 0.623 (0.431)    | 1 (0.966) |    12.92 | chelo, FalleN, KSCERATO, kye, yuurih |
|           39 |      598 | 2024-06-06 | Eternal Fire       | W   | 0.964      | 0.715        | 1.000 (0.690)    | 0.430 (0.297)    | 1 (0.964) |    22.32 | chelo, FalleN, KSCERATO, kye, yuurih |
|           38 |      631 | 2024-06-05 | BetBoom            | W   | 0.960      | 0.715        | 0.406 (0.278)    | 0.745 (0.512)    | 1 (0.960) |    15.06 | chelo, FalleN, KSCERATO, kye, yuurih |
|           37 |      645 | 2024-06-05 | BIG                | L   | 0.958      | -            | -                | -                | -         |   -18.14 | chelo, FalleN, KSCERATO, kye, yuurih |
|           36 |      724 | 2024-06-02 | GUN5               | L   | 0.940      | -            | -                | -                | -         |   -27.82 | chelo, FalleN, KSCERATO, kye, yuurih |
|           35 |      729 | 2024-06-02 | MOUZ NXT           | W   | 0.939      | 0.435        | 0.152 (0.062)    | 1.000 (0.408)    | -         |     3.05 | chelo, FalleN, KSCERATO, kye, yuurih |
|           34 |      767 | 2024-06-01 | Zero Tenacity      | W   | 0.931      | 0.435        | 0.153 (0.062)    | 1.000 (0.405)    | -         |     2.81 | chelo, FalleN, KSCERATO, kye, yuurih |
|           33 |      818 | 2024-05-30 | RUBY               | W   | 0.919      | 0.435        | 0.139 (0.055)    | 0.563 (0.225)    | -         |     1.35 | chelo, FalleN, KSCERATO, kye, yuurih |
|           32 |      922 | 2024-05-25 | 1WIN               | L   | 0.886      | -            | -                | -                | -         |   -25.98 | chelo, FalleN, KSCERATO, kye, yuurih |
|           31 |      938 | 2024-05-24 | Passion UA         | W   | 0.879      | 0.435        | 0.087 (0.033)    | 0.821 (0.314)    | -         |     1.35 | chelo, FalleN, KSCERATO, kye, yuurih |
|           30 |     1501 | 2024-05-05 | Monte              | L   | 0.753      | -            | -                | -                | -         |   -20.36 | chelo, FalleN, KSCERATO, kye, yuurih |
|           29 |     1520 | 2024-05-04 | ENCE               | W   | 0.746      | 0.889        | 0.216 (0.143)    | 0.399 (0.265)    | 1 (0.746) |     6.56 | chelo, FalleN, KSCERATO, kye, yuurih |
|           28 |     1537 | 2024-05-03 | Bad News Kangaroos | W   | 0.739      | -            | -                | -                | 1 (0.739) |     0.44 | chelo, FalleN, KSCERATO, kye, yuurih |
|           27 |     1580 | 2024-05-01 | FORZE              | L   | 0.727      | -            | -                | -                | -         |   -21.84 | chelo, FalleN, KSCERATO, kye, yuurih |
|           26 |     1601 | 2024-04-30 | Liquid             | L   | 0.721      | -            | -                | -                | -         |   -11.37 | chelo, FalleN, KSCERATO, kye, yuurih |
|           25 |     1850 | 2024-04-19 | MIBR               | L   | 0.648      | -            | -                | -                | -         |   -10.54 | chelo, FalleN, KSCERATO, kye, yuurih |
|           24 |     1870 | 2024-04-19 | Metizport          | W   | 0.647      | 0.589        | -                | 0.489 (0.186)    | 1 (0.647) |     0.72 | chelo, FalleN, KSCERATO, kye, yuurih |
|           23 |     1905 | 2024-04-18 | 9z                 | L   | 0.640      | -            | -                | -                | -         |    -7.62 | chelo, FalleN, KSCERATO, kye, yuurih |
|           22 |     2191 | 2024-04-09 | HEROIC             | L   | 0.579      | -            | -                | -                | -         |    -6.06 | arT, chelo, FalleN, KSCERATO, yuurih |
|           21 |     2214 | 2024-04-08 | MOUZ               | L   | 0.573      | -            | -                | -                | -         |    -2.52 | arT, chelo, FalleN, KSCERATO, yuurih |
|           20 |     2233 | 2024-04-07 | Lynn Vision        | W   | 0.570      | 0.624        | 0.127 (0.045)    | -                | 1 (0.570) |     1.18 | arT, chelo, FalleN, KSCERATO, yuurih |
|           19 |     2551 | 2024-03-22 | Gaimin Gladiators  | L   | 0.461      | -            | -                | -                | -         |   -13.51 | arT, chelo, FalleN, KSCERATO, yuurih |
|           18 |     2570 | 2024-03-21 | FaZe               | L   | 0.454      | -            | -                | -                | -         |    -2.75 | arT, chelo, FalleN, KSCERATO, yuurih |
|           17 |     2581 | 2024-03-21 | G2                 | L   | 0.453      | -            | -                | -                | -         |    -2.49 | arT, chelo, FalleN, KSCERATO, yuurih |
|           16 |     2603 | 2024-03-20 | SAW                | W   | 0.447      | -            | -                | -                | 1 (0.447) |     1.70 | arT, chelo, FalleN, KSCERATO, yuurih |
|           15 |     2619 | 2024-03-19 | ENCE               | W   | 0.440      | -            | -                | -                | 1 (0.440) |     4.03 | arT, chelo, FalleN, KSCERATO, yuurih |
|           14 |     2627 | 2024-03-18 | KOI                | W   | 0.434      | -            | -                | -                | -         |     0.97 | arT, chelo, FalleN, KSCERATO, yuurih |
|           13 |     2641 | 2024-03-17 | Lynn Vision        | L   | 0.428      | -            | -                | -                | -         |   -12.72 | arT, chelo, FalleN, KSCERATO, yuurih |
|           12 |     2656 | 2024-03-17 | Legacy             | L   | 0.426      | -            | -                | -                | -         |   -12.87 | arT, chelo, FalleN, KSCERATO, yuurih |
|           11 |     3003 | 2024-03-03 | Complexity         | W   | 0.335      | -            | -                | -                | -         |     7.31 | arT, chelo, FalleN, KSCERATO, yuurih |
|           10 |     3038 | 2024-03-02 | Liquid             | W   | 0.327      | -            | -                | -                | -         |     4.40 | arT, chelo, FalleN, KSCERATO, yuurih |
|            9 |     3060 | 2024-03-01 | Nouns              | W   | 0.321      | -            | -                | -                | -         |     0.23 | arT, chelo, FalleN, KSCERATO, yuurih |
|            8 |     3192 | 2024-02-23 | 9z                 | L   | 0.276      | -            | -                | -                | -         |    -3.65 | arT, chelo, FalleN, KSCERATO, yuurih |
|            7 |     3205 | 2024-02-22 | 9z                 | W   | 0.269      | -            | -                | -                | -         |     4.99 | arT, chelo, FalleN, KSCERATO, yuurih |
|            6 |     3213 | 2024-02-22 | Imperial           | W   | 0.268      | -            | -                | -                | -         |     2.62 | arT, chelo, FalleN, KSCERATO, yuurih |
|            5 |     3494 | 2024-02-10 | Metizport          | L   | 0.187      | -            | -                | -                | -         |    -5.76 | arT, chelo, FalleN, KSCERATO, yuurih |
|            4 |     3496 | 2024-02-10 | ex-Anonymo         | W   | 0.186      | -            | -                | -                | -         |     0.01 | arT, chelo, FalleN, KSCERATO, yuurih |
|            3 |     3498 | 2024-02-10 | Metizport          | L   | 0.186      | -            | -                | -                | -         |    -5.73 | arT, chelo, FalleN, KSCERATO, yuurih |
|            2 |     3652 | 2024-02-01 | Apeks              | L   | 0.128      | -            | -                | -                | -         |    -3.90 | arT, chelo, FalleN, KSCERATO, yuurih |
|            1 |     3675 | 2024-01-31 | The MongolZ        | L   | 0.120      | -            | -                | -                | -         |    -0.55 | arT, chelo, FalleN, KSCERATO, yuurih |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($65,486.93)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.25) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.987 | $28,000.00     | $27,624.30      |
| 2024-06-02 |      0.940 | $10,000.00     | $9,396.25       |
| 2024-05-26 |      0.893 | $2,000.00      | $1,786.46       |
| 2024-05-12 |      0.800 | $12,000.00     | $9,598.27       |
| 2024-04-20 |      0.655 | $5,000.00      | $3,274.00       |
| 2024-04-14 |      0.612 | $5,000.00      | $3,058.66       |
| 2024-03-31 |      0.521 | $20,000.00     | $10,412.77      |
| 2024-02-02 |      0.134 | $2,500.00      | $336.22         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
