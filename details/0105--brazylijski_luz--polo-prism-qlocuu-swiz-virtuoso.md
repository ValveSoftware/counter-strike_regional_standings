### Roster Details<br />
Team Name: brazylijski luz<br />
Roster: POLO, Prism, Qlocuu, swiz, virtuoso<br />
Global Rank: [105](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [77]( ../standings_europe.md)<br />
<br />
Final Rank Value:  851.2<br />
<br />
Final Rank Value (851.2) = Starting Rank Value (798.0) + Head To Head Adjustments (53.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.322[<sup>1</sup>](#table2)
- Bounty Collected: 0.328[<sup>2</sup>](#table1)
- Opponent Network: 0.122[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.193<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 798.0
- 400 + ( ( 0.193 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 798.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |       16 | 2024-07-31 | SAW               | L   | 1.000      | -            | -                | -                | -         |    -4.03 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           29 |      286 | 2024-07-23 | Sangal            | L   | 1.000      | -            | -                | -                | -         |    -3.84 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           28 |      517 | 2024-07-17 | RUSH B            | W   | 1.000      | 0.500        | 0.017 (0.008)    | 0.308 (0.154)    | 0 (0.000) |    18.57 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           27 |      633 | 2024-07-15 | Rebels            | W   | 1.000      | 0.500        | 0.041 (0.020)    | 0.596 (0.298)    | 0 (0.000) |    23.01 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           26 |     1369 | 2024-06-04 | The Prodigies     | L   | 0.819      | -            | -                | -                | -         |   -21.04 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           25 |     1401 | 2024-06-03 | Johnny Speeds     | L   | 0.812      | -            | -                | -                | -         |    -2.24 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           24 |     1426 | 2024-06-02 | Serbia            | L   | 0.804      | -            | -                | -                | -         |   -14.17 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           23 |     1517 | 2024-05-30 | Enterprise        | W   | 0.784      | 0.371        | 0.040 (0.012)    | 0.622 (0.180)    | 0 (0.000) |    14.89 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           22 |     1535 | 2024-05-29 | SINNERS           | L   | 0.779      | -            | -                | -                | -         |    -6.49 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           21 |     1583 | 2024-05-27 | Entropiq          | W   | 0.764      | -            | -                | -                | 0 (0.000) |     1.80 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           20 |     1643 | 2024-05-23 | GL Academy        | W   | 0.740      | 0.379        | 0.007 (0.002)    | 0.102 (0.029)    | 0 (0.000) |     9.11 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           19 |     1654 | 2024-05-23 | Zero Tenacity     | L   | 0.737      | -            | -                | -                | -         |    -4.14 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           18 |     2184 | 2024-05-06 | Grannys Knockers  | L   | 0.624      | -            | -                | -                | -         |   -11.85 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           17 |     2342 | 2024-04-28 | VP.Prodigy        | W   | 0.572      | 0.396        | 0.026 (0.006)    | 0.406 (0.092)    | 0 (0.000) |     9.77 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           16 |     2351 | 2024-04-28 | Nexus             | W   | 0.571      | 0.396        | 0.014 (0.003)    | 0.465 (0.105)    | 0 (0.000) |     9.14 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           15 |     2515 | 2024-04-20 | Sangal            | L   | 0.520      | -            | -                | -                | -         |    -2.63 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           14 |     2557 | 2024-04-19 | Rebels            | W   | 0.513      | 0.500        | 0.041 (0.010)    | 0.596 (0.153)    | 0 (0.000) |    11.76 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           13 |     2603 | 2024-04-18 | BetBoom           | L   | 0.506      | -            | -                | -                | -         |    -0.53 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           12 |     2609 | 2024-04-18 | Ninjas in Pyjamas | W   | 0.506      | 0.143        | 0.227 (0.016)    | 0.477 (0.034)    | 0 (0.000) |    15.73 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           11 |     2814 | 2024-04-10 | Betera            | W   | 0.453      | -            | -                | -                | 0 (0.000) |     5.29 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           10 |     2867 | 2024-04-09 | FORZE             | L   | 0.447      | -            | -                | -                | -         |    -4.36 | POLO, Prism, Qlocuu, swiz, virtuoso |
|            9 |     3145 | 2024-03-28 | Aurora            | L   | 0.366      | -            | -                | -                | -         |    -0.09 | POLO, Prism, Qlocuu, swiz, virtuoso |
|            8 |     3412 | 2024-03-14 | Rebels            | W   | 0.274      | 0.500        | 0.041 (0.006)    | 0.596 (0.082)    | -         |     6.53 | POLO, Prism, Qlocuu, swiz, virtuoso |
|            7 |     3503 | 2024-03-11 | SINNERS           | W   | 0.253      | 0.500        | 0.038 (0.005)    | 0.721 (0.091)    | -         |     6.32 | POLO, Prism, Qlocuu, swiz, virtuoso |
|            6 |     3619 | 2024-03-06 | ALTERNATE aTTaX   | L   | 0.220      | -            | -                | -                | -         |    -1.75 | POLO, Prism, Qlocuu, swiz, virtuoso |
|            5 |     3738 | 2024-03-02 | Sashi             | L   | 0.192      | -            | -                | -                | -         |    -0.70 | Furlan, phr, POLO, Prism, Qlocuu    |
|            4 |     3804 | 2024-02-27 | Spirit Academy    | L   | 0.166      | -            | -                | -                | -         |    -4.22 | POLO, Prism, Qlocuu, swiz, virtuoso |
|            3 |     3879 | 2024-02-24 | The Chosen Few    | W   | 0.145      | -            | -                | -                | -         |     1.51 | Furlan, phr, POLO, Prism, Qlocuu    |
|            2 |     4009 | 2024-02-18 | ARCRED            | W   | 0.106      | -            | -                | -                | -         |     1.97 | Furlan, phr, POLO, Prism, Qlocuu    |
|            1 |     4262 | 2024-02-04 | ALTERNATE aTTaX   | L   | 0.013      | -            | -                | -                | -         |    -0.10 | Furlan, phr, POLO, Prism, Qlocuu    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,559.28)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
