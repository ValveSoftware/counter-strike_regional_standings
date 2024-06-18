### Roster Details<br />
Team Name: FURIA<br />
Roster: chelo, FalleN, KSCERATO, kye, yuurih<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [17](../standings_global.md)<br />
Regional Rank: [4]( ../standings_americas.md)<br />
Final Rank Value:  1528.6<br />
<br />
Final Rank Value (1528.6) = Starting Rank Value (1657.9) + Head To Head Adjustments (-129.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.621[<sup>1</sup>](#table2)
- Bounty Collected: 0.588[<sup>2</sup>](#table1)
- Opponent Network: 0.379[<sup>2</sup>](#table1)
- LAN Wins: 0.888[<sup>2</sup>](#table1)

The average of these factors is 0.619<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1657.9
- 400 + ( ( 0.619 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1657.9


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
|           42 |      307 | 2024-06-08 | Ninjas in Pyjamas  | L   | 1.000      | -            | -                | -                | -         |   -11.67 | chelo, FalleN, KSCERATO, kye, yuurih |
|           41 |      430 | 2024-06-06 | Complexity         | W   | 1.000      | 0.715        | 0.426 (0.305)    | 0.442 (0.316)    | 1 (1.000) |    23.98 | chelo, FalleN, KSCERATO, kye, yuurih |
|           40 |      442 | 2024-06-06 | fnatic             | W   | 1.000      | 0.715        | 0.290 (0.207)    | 0.666 (0.476)    | 1 (1.000) |    12.52 | chelo, FalleN, KSCERATO, kye, yuurih |
|           39 |      462 | 2024-06-06 | Eternal Fire       | W   | 1.000      | 0.715        | 1.000 (0.715)    | 0.485 (0.347)    | 1 (1.000) |    25.29 | chelo, FalleN, KSCERATO, kye, yuurih |
|           38 |      495 | 2024-06-05 | BetBoom            | W   | 1.000      | 0.715        | 0.414 (0.296)    | 0.798 (0.571)    | 1 (1.000) |    15.99 | chelo, FalleN, KSCERATO, kye, yuurih |
|           37 |      509 | 2024-06-05 | BIG                | L   | 1.000      | -            | -                | -                | -         |   -16.59 | chelo, FalleN, KSCERATO, kye, yuurih |
|           36 |      588 | 2024-06-02 | GUN5               | L   | 1.000      | -            | -                | -                | -         |   -29.35 | chelo, FalleN, KSCERATO, kye, yuurih |
|           35 |      594 | 2024-06-02 | MOUZ NXT           | W   | 1.000      | 0.435        | 0.158 (0.069)    | 1.000 (0.435)    | -         |     3.93 | chelo, FalleN, KSCERATO, kye, yuurih |
|           34 |      633 | 2024-06-01 | Zero Tenacity      | W   | 1.000      | 0.435        | 0.153 (0.067)    | 1.000 (0.435)    | -         |     3.69 | chelo, FalleN, KSCERATO, kye, yuurih |
|           33 |      684 | 2024-05-30 | RUBY               | W   | 1.000      | 0.435        | 0.121 (0.053)    | 0.574 (0.249)    | -         |     1.72 | chelo, FalleN, KSCERATO, kye, yuurih |
|           32 |      788 | 2024-05-25 | 1WIN               | L   | 1.000      | -            | -                | -                | -         |   -28.54 | chelo, FalleN, KSCERATO, kye, yuurih |
|           31 |      804 | 2024-05-24 | Passion UA         | W   | 1.000      | 0.435        | 0.086 (0.037)    | 0.803 (0.349)    | -         |     1.86 | chelo, FalleN, KSCERATO, kye, yuurih |
|           30 |     1367 | 2024-05-05 | Monte              | L   | 0.909      | -            | -                | -                | -         |   -23.47 | chelo, FalleN, KSCERATO, kye, yuurih |
|           29 |     1386 | 2024-05-04 | ENCE               | W   | 0.902      | 0.889        | 0.229 (0.183)    | 0.424 (0.340)    | 1 (0.902) |     9.55 | chelo, FalleN, KSCERATO, kye, yuurih |
|           28 |     1403 | 2024-05-03 | Bad News Kangaroos | W   | 0.895      | -            | -                | -                | 1 (0.895) |     0.69 | chelo, FalleN, KSCERATO, kye, yuurih |
|           27 |     1446 | 2024-05-01 | FORZE              | L   | 0.883      | -            | -                | -                | -         |   -25.94 | chelo, FalleN, KSCERATO, kye, yuurih |
|           26 |     1467 | 2024-04-30 | Liquid             | L   | 0.876      | -            | -                | -                | -         |   -11.50 | chelo, FalleN, KSCERATO, kye, yuurih |
|           25 |     1716 | 2024-04-19 | MIBR               | L   | 0.804      | -            | -                | -                | -         |   -11.30 | chelo, FalleN, KSCERATO, kye, yuurih |
|           24 |     1736 | 2024-04-19 | Metizport          | W   | 0.802      | 0.589        | -                | 0.587 (0.277)    | 1 (0.802) |     1.21 | chelo, FalleN, KSCERATO, kye, yuurih |
|           23 |     1771 | 2024-04-18 | 9z                 | L   | 0.796      | -            | -                | -                | -         |   -11.40 | chelo, FalleN, KSCERATO, kye, yuurih |
|           22 |     2057 | 2024-04-09 | HEROIC             | L   | 0.735      | -            | -                | -                | -         |    -6.96 | arT, chelo, FalleN, KSCERATO, yuurih |
|           21 |     2080 | 2024-04-08 | MOUZ               | L   | 0.728      | -            | -                | -                | -         |    -2.35 | arT, chelo, FalleN, KSCERATO, yuurih |
|           20 |     2099 | 2024-04-07 | Lynn Vision        | W   | 0.726      | 0.624        | 0.126 (0.057)    | -                | 1 (0.726) |     1.97 | arT, chelo, FalleN, KSCERATO, yuurih |
|           19 |     2418 | 2024-03-22 | Gaimin Gladiators  | L   | 0.617      | -            | -                | -                | -         |   -17.27 | arT, chelo, FalleN, KSCERATO, yuurih |
|           18 |     2437 | 2024-03-21 | FaZe               | L   | 0.610      | -            | -                | -                | -         |    -2.66 | arT, chelo, FalleN, KSCERATO, yuurih |
|           17 |     2448 | 2024-03-21 | G2                 | L   | 0.608      | -            | -                | -                | -         |    -2.87 | arT, chelo, FalleN, KSCERATO, yuurih |
|           16 |     2470 | 2024-03-20 | SAW                | W   | 0.603      | -            | -                | -                | 1 (0.603) |     3.39 | arT, chelo, FalleN, KSCERATO, yuurih |
|           15 |     2486 | 2024-03-19 | ENCE               | W   | 0.596      | -            | -                | -                | 1 (0.596) |     6.92 | arT, chelo, FalleN, KSCERATO, yuurih |
|           14 |     2494 | 2024-03-18 | KOI                | W   | 0.589      | -            | -                | -                | -         |     1.51 | arT, chelo, FalleN, KSCERATO, yuurih |
|           13 |     2508 | 2024-03-17 | Lynn Vision        | L   | 0.584      | -            | -                | -                | -         |   -17.03 | arT, chelo, FalleN, KSCERATO, yuurih |
|           12 |     2523 | 2024-03-17 | Legacy             | L   | 0.582      | -            | -                | -                | -         |   -17.43 | arT, chelo, FalleN, KSCERATO, yuurih |
|           11 |     2870 | 2024-03-03 | Complexity         | W   | 0.490      | -            | -                | -                | -         |    10.70 | arT, chelo, FalleN, KSCERATO, yuurih |
|           10 |     2905 | 2024-03-02 | Liquid             | W   | 0.482      | -            | -                | -                | -         |     7.78 | arT, chelo, FalleN, KSCERATO, yuurih |
|            9 |     2927 | 2024-03-01 | Nouns              | W   | 0.476      | -            | -                | -                | -         |     0.37 | arT, chelo, FalleN, KSCERATO, yuurih |
|            8 |     3059 | 2024-02-23 | 9z                 | L   | 0.431      | -            | -                | -                | -         |    -6.98 | arT, chelo, FalleN, KSCERATO, yuurih |
|            7 |     3072 | 2024-02-22 | 9z                 | W   | 0.424      | -            | -                | -                | -         |     6.63 | arT, chelo, FalleN, KSCERATO, yuurih |
|            6 |     3080 | 2024-02-22 | Imperial           | W   | 0.423      | -            | -                | -                | -         |     5.33 | arT, chelo, FalleN, KSCERATO, yuurih |
|            5 |     3361 | 2024-02-10 | Metizport          | L   | 0.342      | -            | -                | -                | -         |   -10.51 | arT, chelo, FalleN, KSCERATO, yuurih |
|            4 |     3363 | 2024-02-10 | ex-Anonymo         | W   | 0.342      | -            | -                | -                | -         |     0.03 | arT, chelo, FalleN, KSCERATO, yuurih |
|            3 |     3365 | 2024-02-10 | Metizport          | L   | 0.341      | -            | -                | -                | -         |   -10.51 | arT, chelo, FalleN, KSCERATO, yuurih |
|            2 |     3519 | 2024-02-01 | Apeks              | L   | 0.283      | -            | -                | -                | -         |    -8.54 | arT, chelo, FalleN, KSCERATO, yuurih |
|            1 |     3542 | 2024-01-31 | The MongolZ        | L   | 0.276      | -            | -                | -                | -         |    -1.44 | arT, chelo, FalleN, KSCERATO, yuurih |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($73,607.37)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.24) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $28,000.00     | $28,000.00      |
| 2024-06-02 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-05-26 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-05-12 |      0.956 | $12,000.00     | $11,466.34      |
| 2024-04-20 |      0.810 | $5,000.00      | $4,052.37       |
| 2024-04-14 |      0.767 | $5,000.00      | $3,837.03       |
| 2024-03-31 |      0.676 | $20,000.00     | $13,526.23      |
| 2024-02-02 |      0.290 | $2,500.00      | $725.40         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
