### Roster Details<br />
Team Name: BRUTE<br />
Roster: hfah, KAD1M, mASKED, realzen, Siko<br />
Global Rank: [141](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [102]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  826.6<br />
<br />
Final Rank Value (826.6) = Starting Rank Value (807.2) + Head To Head Adjustments (19.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.310[<sup>1</sup>](#table2)
- Bounty Collected: 0.298[<sup>2</sup>](#table1)
- Opponent Network: 0.127[<sup>2</sup>](#table1)
- LAN Wins: 0.127[<sup>2</sup>](#table1)

The average of these factors is 0.215<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 807.2
- 400 + ( ( 0.215 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 807.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           27 |      190 | 2026-02-24 | MANA               | L   | 1.000      | -            | -                | -                | -         |   -13.43 | hfah, KAD1M, mASKED, realzen, Siko      |
|           26 |      207 | 2026-02-24 | 100 Thieves        | L   | 1.000      | -            | -                | -                | -         |    -2.44 | hfah, KAD1M, mASKED, realzen, Siko      |
|           25 |      221 | 2026-02-24 | LAGUNA             | W   | 1.000      | 0.354        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     2.44 | hfah, KAD1M, mASKED, realzen, Siko      |
|           24 |      446 | 2026-02-19 | ASTRAL             | L   | 1.000      | -            | -                | -                | -         |   -12.97 | hfah, KAD1M, mASKED, realzen, Siko      |
|           23 |      565 | 2026-02-17 | illwill            | L   | 1.000      | -            | -                | -                | -         |    -1.99 | hfah, KAD1M, mASKED, realzen, Siko      |
|           22 |      603 | 2026-02-16 | MOUZ NXT           | L   | 1.000      | -            | -                | -                | -         |    -6.22 | hfah, KAD1M, mASKED, realzen, Siko      |
|           21 |      723 | 2026-02-14 | Fuzos              | W   | 1.000      | 0.384        | 0.008 (0.003)    | 0.480 (0.184)    | 0 (0.000) |    17.39 | hfah, KAD1M, mASKED, realzen, Siko      |
|           20 |      877 | 2026-02-10 | home               | W   | 1.000      | 0.384        | 0.001 (0.000)    | 0.171 (0.066)    | 0 (0.000) |    10.07 | hfah, KAD1M, mASKED, N1KOLAJ, realzen   |
|           19 |      907 | 2026-02-09 | Bebop              | W   | 1.000      | 0.384        | 0.003 (0.001)    | 0.634 (0.244)    | 0 (0.000) |    16.74 | hfah, KAD1M, mASKED, realzen, Siko      |
|           18 |     1240 | 2026-01-29 | ARCRED             | L   | 0.985      | -            | -                | -                | -         |    -6.47 | hfah, KAD1M, realzen, Siko, The eLiVe   |
|           17 |     1291 | 2026-01-27 | ALLINNERS          | W   | 0.971      | 0.435        | 0.008 (0.003)    | 0.174 (0.073)    | 0 (0.000) |    16.30 | hfah, KAD1M, realzen, The eLiVe, w4rden |
|           16 |     1316 | 2026-01-25 | ex-RUBY            | L   | 0.960      | -            | -                | -                | -         |    -7.20 | hfah, KAD1M, realzen, The eLiVe, w4rden |
|           15 |     1342 | 2026-01-24 | AM                 | L   | 0.954      | -            | -                | -                | -         |    -6.40 | hfah, KAD1M, realzen, The eLiVe, w4rden |
|           14 |     1503 | 2026-01-20 | MASONIC            | W   | 0.927      | 0.384        | 0.000 (0.000)    | 0.517 (0.184)    | 0 (0.000) |    18.07 | KAD1M, realzen, Siko, The eLiVe, w4rden |
|           13 |     1551 | 2026-01-18 | los kogutos        | W   | 0.912      | 0.384        | 0.037 (0.013)    | 1.000 (0.351)    | 0 (0.000) |    21.84 | KAD1M, realzen, Siko, The eLiVe, w4rden |
|           12 |     1695 | 2026-01-15 | Pigeons            | W   | 0.892      | 0.384        | 0.066 (0.023)    | 0.399 (0.137)    | 0 (0.000) |    16.64 | KAD1M, realzen, Siko, The eLiVe, w4rden |
|           11 |     1757 | 2026-01-11 | The Last Resort    | L   | 0.865      | -            | -                | -                | -         |   -14.39 | KAD1M, realzen, Siko, The eLiVe, w4rden |
|           10 |     1775 | 2026-01-07 | HYPERSPIRIT        | L   | 0.838      | -            | -                | -                | -         |   -13.41 | KAD1M, realzen, Siko, The eLiVe, w4rden |
|            9 |     1921 | 2025-12-20 | BET-M              | L   | 0.718      | -            | -                | -                | -         |    -3.92 | KAD1M, N1KOLAJ, realzen, Siko, w4rden   |
|            8 |     2313 | 2025-11-29 | UNiTY              | L   | 0.579      | -            | -                | -                | -         |    -6.72 | KAD1M, N1KOLAJ, realzen, Siko, w4rden   |
|            7 |     2335 | 2025-11-28 | ex-Fingers Crossed | L   | 0.573      | -            | -                | -                | -         |    -5.04 | KAD1M, N1KOLAJ, realzen, Siko, w4rden   |
|            6 |     3788 | 2025-10-11 | ex-Fingers Crossed | L   | 0.251      | -            | -                | -                | -         |    -2.25 | KAD1M, N1KOLAJ, realzen, Siko, w4rden   |
|            5 |     3805 | 2025-10-10 | GLORE              | W   | 0.247      | 0.371        | 0.000 (0.000)    | 0.012 (0.001)    | 1 (0.247) |     0.73 | KAD1M, N1KOLAJ, realzen, Siko, w4rden   |
|            4 |     3870 | 2025-10-09 | SINNERS            | L   | 0.239      | -            | -                | -                | -         |    -0.35 | KAD1M, N1KOLAJ, realzen, Siko, w4rden   |
|            3 |     4353 | 2025-09-28 | UNiTY              | W   | 0.167      | 0.334        | 0.009 (0.000)    | 0.529 (0.029)    | 0 (0.000) |     3.18 | KAD1M, N1KOLAJ, realzen, Siko, w4rden   |
|            2 |     4402 | 2025-09-27 | Dark Tigers        | W   | 0.161      | -            | -                | -                | -         |     0.47 | KAD1M, N1KOLAJ, realzen, Siko, w4rden   |
|            1 |     4501 | 2025-09-25 | ex-Fingers Crossed | L   | 0.147      | -            | -                | -                | -         |    -1.37 | KAD1M, N1KOLAJ, realzen, Siko, w4rden   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,977.18)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-29 |      0.580 | $2,379.00      | $1,379.45       |
| 2025-10-11 |      0.253 | $2,362.00      | $597.73         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
