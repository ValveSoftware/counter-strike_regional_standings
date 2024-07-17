### Roster Details<br />
Team Name: brazylijski luz<br />
Roster: POLO, Prism, Qlocuu, swiz, virtuoso<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [107](../standings_global.md)<br />
Regional Rank: [77]( ../standings_europe.md)<br />
Final Rank Value:  884.5<br />
<br />
Final Rank Value (884.5) = Starting Rank Value (836.4) + Head To Head Adjustments (48.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.341[<sup>1</sup>](#table2)
- Bounty Collected: 0.346[<sup>2</sup>](#table1)
- Opponent Network: 0.126[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.203<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 836.4
- 400 + ( ( 0.203 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 836.4


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
|           27 |      103 | 2024-07-15 | Rebels            | W   | 1.000      | 0.500        | 0.052 (0.026)    | 0.575 (0.287)    | 0 (0.000) |    23.02 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           26 |      839 | 2024-06-04 | The Prodigies     | L   | 0.913      | -            | -                | -                | -         |   -24.14 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           25 |      871 | 2024-06-03 | Johnny Speeds     | L   | 0.906      | -            | -                | -                | -         |    -2.13 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           24 |      896 | 2024-06-02 | Serbia            | L   | 0.899      | -            | -                | -                | -         |   -15.71 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           23 |      987 | 2024-05-30 | Enterprise        | W   | 0.878      | 0.371        | 0.055 (0.018)    | 0.635 (0.207)    | 0 (0.000) |    16.88 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           22 |     1005 | 2024-05-29 | SINNERS           | L   | 0.874      | -            | -                | -                | -         |    -7.10 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           21 |     1053 | 2024-05-27 | Entropiq          | W   | 0.858      | -            | -                | -                | 0 (0.000) |     1.58 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           20 |     1113 | 2024-05-23 | GL Academy        | W   | 0.834      | 0.379        | 0.012 (0.004)    | 0.129 (0.041)    | 0 (0.000) |    10.15 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           19 |     1124 | 2024-05-23 | Zero Tenacity     | L   | 0.831      | -            | -                | -                | -         |    -5.43 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           18 |     1654 | 2024-05-06 | Grannys Knockers  | L   | 0.718      | -            | -                | -                | -         |   -13.64 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           17 |     1812 | 2024-04-28 | VP.Prodigy        | W   | 0.667      | 0.396        | 0.039 (0.010)    | 0.498 (0.132)    | 0 (0.000) |    11.07 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           16 |     1821 | 2024-04-28 | Nexus             | W   | 0.665      | 0.396        | 0.011 (0.003)    | 0.432 (0.114)    | 0 (0.000) |    10.10 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           15 |     1985 | 2024-04-20 | Sangal            | L   | 0.614      | -            | -                | -                | -         |    -3.63 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           14 |     2027 | 2024-04-19 | Rebels            | W   | 0.608      | 0.500        | 0.052 (0.016)    | 0.575 (0.175)    | 0 (0.000) |    14.10 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           13 |     2073 | 2024-04-18 | BetBoom           | L   | 0.600      | -            | -                | -                | -         |    -0.37 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           12 |     2079 | 2024-04-18 | Ninjas in Pyjamas | W   | 0.600      | 0.143        | 0.343 (0.029)    | 0.534 (0.046)    | 0 (0.000) |    18.78 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           11 |     2284 | 2024-04-10 | Betera            | W   | 0.548      | -            | -                | -                | 0 (0.000) |     6.34 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           10 |     2337 | 2024-04-09 | FORZE             | L   | 0.541      | -            | -                | -                | -         |    -4.51 | POLO, Prism, Qlocuu, swiz, virtuoso |
|            9 |     2615 | 2024-03-28 | Aurora            | L   | 0.461      | -            | -                | -                | -         |    -0.16 | POLO, Prism, Qlocuu, swiz, virtuoso |
|            8 |     2882 | 2024-03-14 | Rebels            | W   | 0.368      | 0.500        | 0.052 (0.010)    | 0.575 (0.106)    | 0 (0.000) |     8.98 | POLO, Prism, Qlocuu, swiz, virtuoso |
|            7 |     2973 | 2024-03-11 | SINNERS           | W   | 0.347      | 0.500        | 0.058 (0.010)    | 0.744 (0.129)    | -         |     9.00 | POLO, Prism, Qlocuu, swiz, virtuoso |
|            6 |     3089 | 2024-03-06 | ALTERNATE aTTaX   | L   | 0.315      | -            | -                | -                | -         |    -2.29 | POLO, Prism, Qlocuu, swiz, virtuoso |
|            5 |     3208 | 2024-03-02 | Sashi             | L   | 0.286      | -            | -                | -                | -         |    -1.39 | Furlan, phr, POLO, Prism, Qlocuu    |
|            4 |     3274 | 2024-02-27 | Spirit Academy    | L   | 0.260      | -            | -                | -                | -         |    -6.84 | POLO, Prism, Qlocuu, swiz, virtuoso |
|            3 |     3349 | 2024-02-24 | The Chosen Few    | W   | 0.240      | -            | -                | -                | -         |     2.33 | Furlan, phr, POLO, Prism, Qlocuu    |
|            2 |     3479 | 2024-02-18 | ARCRED            | W   | 0.200      | 0.358        | 0.057 (0.004)    | 0.354 (0.025)    | -         |     3.78 | Furlan, phr, POLO, Prism, Qlocuu    |
|            1 |     3732 | 2024-02-04 | ALTERNATE aTTaX   | L   | 0.107      | -            | -                | -                | -         |    -0.73 | Furlan, phr, POLO, Prism, Qlocuu    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,842.82)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
