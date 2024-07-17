### Roster Details<br />
Team Name: Crescent fe<br />
Roster: akiyanora, amore, ayaka, Margo, meo<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [166](../standings_global.md)<br />
Regional Rank: [107]( ../standings_europe.md)<br />
Final Rank Value:  681.9<br />
<br />
Final Rank Value (681.9) = Starting Rank Value (693.6) + Head To Head Adjustments (-11.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.318[<sup>1</sup>](#table2)
- Bounty Collected: 0.223[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.137<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 693.6
- 400 + ( ( 0.137 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 693.6


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
|           14 |      597 | 2024-06-08 | dream catchers fe | L   | 0.941      | -            | -                | -                | -         |   -13.52 | akiyanora, amore, ayaka, Margo, meo |
|           13 |      621 | 2024-06-08 | ENCE Athena       | W   | 0.940      | 0.270        | 0.004 (0.001)    | 0.057 (0.014)    | 0 (0.000) |    13.29 | akiyanora, amore, ayaka, Margo, meo |
|           12 |     1059 | 2024-05-26 | NIP Impact        | W   | 0.854      | 0.250        | 0.008 (0.002)    | 0.191 (0.041)    | 0 (0.000) |    16.93 | akiyanora, amore, ayaka, Margo, meo |
|           11 |     1286 | 2024-05-18 | Imperial fe       | L   | 0.800      | -            | -                | -                | -         |    -1.60 | akiyanora, amore, ayaka, Margo, meo |
|           10 |     1669 | 2024-05-05 | Imperial fe       | L   | 0.713      | -            | -                | -                | -         |    -1.45 | akiyanora, amore, ayaka, Margo, meo |
|            9 |     2030 | 2024-04-19 | NAVI Javelins     | L   | 0.607      | -            | -                | -                | -         |    -4.02 | akiyanora, amore, ayaka, Margo, meo |
|            8 |     2242 | 2024-04-11 | Fearless Cheetahs | L   | 0.554      | -            | -                | -                | -         |    -7.17 | akiyanora, amore, ayaka, Margo, meo |
|            7 |     2296 | 2024-04-10 | Permitta W        | L   | 0.546      | -            | -                | -                | -         |   -12.63 | akiyanora, amore, ayaka, Margo, meo |
|            6 |     2379 | 2024-04-08 | Imperial fe       | L   | 0.533      | -            | -                | -                | -         |    -1.23 | akiyanora, amore, ayaka, Margo, meo |
|            5 |     2612 | 2024-03-28 | 1WIN Gang         | W   | 0.461      | 0.331        | 0.002 (0.000)    | 0.023 (0.003)    | 0 (0.000) |     7.08 | akiyanora, amore, ayaka, Margo, meo |
|            4 |     2765 | 2024-03-20 | Spirit fe         | L   | 0.408      | -            | -                | -                | -         |    -6.74 | akiyanora, amore, ayaka, Margo, meo |
|            3 |     2916 | 2024-03-13 | Let Her Cook      | L   | 0.361      | -            | -                | -                | -         |    -1.62 | akiyanora, amore, ayaka, Margo, meo |
|            2 |     3350 | 2024-02-24 | NAVI Javelins     | L   | 0.240      | -            | -                | -                | -         |    -1.97 | akiyanora, amore, ayaka, Margo, meo |
|            1 |     3478 | 2024-02-18 | ex-FORZE Ladies   | W   | 0.200      | 0.143        | 0.005 (0.000)    | 0.045 (0.001)    | 0 (0.000) |     2.95 | akiyanora, amore, ayaka, Margo, meo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,752.88)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-08 |      0.941 | $300.00        | $282.31         |
| 2024-05-26 |      0.854 | $750.00        | $640.40         |
| 2024-05-05 |      0.713 | $250.00        | $178.24         |
| 2024-04-21 |      0.621 | $1,050.00      | $651.92         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
