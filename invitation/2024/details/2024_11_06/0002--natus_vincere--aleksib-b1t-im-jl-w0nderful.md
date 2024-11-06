### Roster Details<br />
Team Name: Natus Vincere<br />
Roster: Aleksib, b1t, iM, jL, w0nderful<br />
Global Rank: [2](../../standings_global_2024_11_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_06.md)<br />
Regional Rank: [2]( ../../standings_europe_2024_11_06.md)<br />
<br />
Final Rank Value:  1887.3<br />
<br />
Final Rank Value (1887.3) = Starting Rank Value (1926.6) + Head To Head Adjustments (-39.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.748[<sup>2</sup>](#table1)
- Opponent Network: 0.364[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.778<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1926.6
- 400 + ( ( 0.778 - 0.000 ) / ( 0.815 - 0.000 ) ) * 1600 = 1926.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           39 |      134 | 2024-10-31 | FaZe              | L   | 1.000      | -            | -                | -                | -         |   -26.64 | Aleksib, b1t, iM, jL, w0nderful |
|           38 |      155 | 2024-10-30 | Astralis          | L   | 1.000      | -            | -                | -                | -         |   -29.58 | Aleksib, b1t, iM, jL, w0nderful |
|           37 |      462 | 2024-10-13 | MOUZ              | W   | 1.000      | 0.624        | 0.483 (0.302)    | -                | 1 (1.000) |     6.67 | Aleksib, b1t, iM, jL, w0nderful |
|           36 |      482 | 2024-10-12 | HEROIC            | W   | 1.000      | 0.624        | 0.524 (0.327)    | 0.554 (0.346)    | 1 (1.000) |     4.86 | Aleksib, b1t, iM, jL, w0nderful |
|           35 |      500 | 2024-10-11 | Virtus.pro        | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.64 | Aleksib, b1t, iM, jL, w0nderful |
|           34 |      544 | 2024-10-09 | FURIA             | L   | 1.000      | -            | -                | -                | -         |   -27.69 | Aleksib, b1t, iM, jL, w0nderful |
|           33 |      598 | 2024-10-07 | Liquid            | W   | 1.000      | -            | -                | -                | 1 (1.000) |     3.25 | Aleksib, b1t, iM, jL, w0nderful |
|           32 |      611 | 2024-10-07 | Imperial          | W   | 1.000      | 0.624        | -                | 0.588 (0.367)    | 1 (1.000) |     0.33 | Aleksib, b1t, iM, jL, w0nderful |
|           31 |      873 | 2024-09-29 | G2                | L   | 0.947      | -            | -                | -                | -         |   -14.15 | Aleksib, b1t, iM, jL, w0nderful |
|           30 |      900 | 2024-09-28 | FaZe              | W   | 0.942      | -            | -                | -                | 1 (0.942) |     3.49 | Aleksib, b1t, iM, jL, w0nderful |
|           29 |     1008 | 2024-09-26 | G2                | W   | 0.926      | 0.729        | 1.000 (0.675)    | 0.382 (0.258)    | 1 (0.926) |    14.72 | Aleksib, b1t, iM, jL, w0nderful |
|           28 |     1064 | 2024-09-25 | Falcons           | W   | 0.919      | -            | -                | -                | 1 (0.919) |     0.66 | Aleksib, b1t, iM, jL, w0nderful |
|           27 |     1165 | 2024-09-22 | Eternal Fire      | W   | 0.901      | 0.889        | 0.459 (0.368)    | 0.537 (0.430)    | 1 (0.901) |     6.60 | Aleksib, b1t, iM, jL, w0nderful |
|           26 |     1189 | 2024-09-21 | G2                | W   | 0.895      | 0.889        | 1.000 (0.795)    | 0.382 (0.304)    | 1 (0.895) |    15.59 | Aleksib, b1t, iM, jL, w0nderful |
|           25 |     1220 | 2024-09-20 | Spirit            | W   | 0.887      | 0.889        | 1.000 (0.788)    | 0.452 (0.356)    | -         |    12.44 | Aleksib, b1t, iM, jL, w0nderful |
|           24 |     1585 | 2024-09-07 | Eternal Fire      | W   | 0.801      | 0.889        | 0.459 (0.327)    | 0.537 (0.382)    | -         |     5.96 | Aleksib, b1t, iM, jL, w0nderful |
|           23 |     1697 | 2024-09-04 | Ninjas in Pyjamas | W   | 0.781      | -            | -                | -                | -         |     0.29 | Aleksib, b1t, iM, jL, w0nderful |
|           22 |     1741 | 2024-09-03 | Lynn Vision       | W   | 0.773      | -            | -                | -                | -         |     0.10 | Aleksib, b1t, iM, jL, w0nderful |
|           21 |     2321 | 2024-08-18 | Vitality          | L   | 0.668      | -            | -                | -                | -         |   -11.83 | Aleksib, b1t, iM, jL, w0nderful |
|           20 |     2343 | 2024-08-17 | MOUZ              | W   | 0.661      | 1.000        | 0.483 (0.319)    | 0.342 (0.226)    | -         |     5.75 | Aleksib, b1t, iM, jL, w0nderful |
|           19 |     2458 | 2024-08-13 | SAW               | W   | 0.633      | 1.000        | -                | 0.776 (0.492)    | -         |     3.07 | Aleksib, b1t, iM, jL, w0nderful |
|           18 |     2535 | 2024-08-11 | Astralis          | W   | 0.620      | -            | -                | -                | -         |     1.60 | Aleksib, b1t, iM, jL, w0nderful |
|           17 |     2552 | 2024-08-10 | paiN              | W   | 0.614      | 1.000        | -                | 0.776 (0.477)    | -         |     1.70 | Aleksib, b1t, iM, jL, w0nderful |
|           16 |     2757 | 2024-08-04 | Complexity        | W   | 0.573      | -            | -                | -                | -         |     1.28 | Aleksib, b1t, iM, jL, w0nderful |
|           15 |     2782 | 2024-08-03 | Liquid            | L   | 0.568      | -            | -                | -                | -         |   -16.15 | Aleksib, b1t, iM, jL, w0nderful |
|           14 |     2819 | 2024-08-02 | BIG               | W   | 0.561      | -            | -                | -                | -         |     0.89 | Aleksib, b1t, iM, jL, w0nderful |
|           13 |     2861 | 2024-08-01 | Liquid            | L   | 0.554      | -            | -                | -                | -         |   -16.00 | Aleksib, b1t, iM, jL, w0nderful |
|           12 |     2917 | 2024-07-31 | BIG               | W   | 0.547      | -            | -                | -                | -         |     0.75 | Aleksib, b1t, iM, jL, w0nderful |
|           11 |     3232 | 2024-07-21 | G2                | W   | 0.481      | 1.000        | 1.000 (0.481)    | -                | -         |     9.13 | Aleksib, b1t, iM, jL, w0nderful |
|           10 |     3264 | 2024-07-20 | MOUZ              | W   | 0.475      | 1.000        | 0.483 (0.229)    | -                | -         |     3.82 | Aleksib, b1t, iM, jL, w0nderful |
|            9 |     3294 | 2024-07-19 | FaZe              | W   | 0.468      | -            | -                | -                | -         |     2.36 | Aleksib, b1t, iM, jL, w0nderful |
|            8 |     3432 | 2024-07-17 | FURIA             | W   | 0.454      | -            | -                | -                | -         |     1.63 | Aleksib, b1t, iM, jL, w0nderful |
|            7 |     3751 | 2024-06-16 | Spirit            | L   | 0.247      | -            | -                | -                | -         |    -4.24 | Aleksib, b1t, iM, jL, w0nderful |
|            6 |     3775 | 2024-06-15 | Virtus.pro        | W   | 0.241      | -            | -                | -                | -         |     0.67 | Aleksib, b1t, iM, jL, w0nderful |
|            5 |     3865 | 2024-06-13 | FaZe              | W   | 0.227      | -            | -                | -                | -         |     1.15 | Aleksib, b1t, iM, jL, w0nderful |
|            4 |     3894 | 2024-06-12 | Astralis          | W   | 0.220      | -            | -                | -                | -         |     0.51 | Aleksib, b1t, iM, jL, w0nderful |
|            3 |     4436 | 2024-05-29 | HEROIC            | L   | 0.127      | -            | -                | -                | -         |    -3.05 | Aleksib, b1t, iM, jL, w0nderful |
|            2 |     4457 | 2024-05-28 | Spirit            | L   | 0.121      | -            | -                | -                | -         |    -2.11 | Aleksib, b1t, iM, jL, w0nderful |
|            1 |     4475 | 2024-05-27 | BIG               | W   | 0.115      | -            | -                | -                | -         |     0.18 | Aleksib, b1t, iM, jL, w0nderful |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($690,446.32)
- Divide that value by the 5th highest value among all rosters ($478,523.89)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      1.000 | $15,000.00     | $15,000.00      |
| 2024-10-13 |      1.000 | $100,000.00    | $100,000.00     |
| 2024-09-29 |      0.947 | $85,000.00     | $80,515.94      |
| 2024-09-22 |      0.901 | $170,000.00    | $153,214.48     |
| 2024-08-18 |      0.668 | $180,000.00    | $120,213.88     |
| 2024-08-04 |      0.573 | $12,500.00     | $7,167.79       |
| 2024-07-21 |      0.481 | $400,000.00    | $192,551.42     |
| 2024-06-16 |      0.247 | $85,000.00     | $21,008.22      |
| 2024-06-02 |      0.155 | $5,000.00      | $774.60         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
