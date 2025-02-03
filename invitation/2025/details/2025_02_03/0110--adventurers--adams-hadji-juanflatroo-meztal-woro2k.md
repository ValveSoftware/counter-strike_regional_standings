### Roster Details<br />
Team Name: Adventurers<br />
Roster: adamS, hAdji, juanflatroo, meztal, Woro2k<br />
Global Rank: [110](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_03.md)<br />
Regional Rank: [78]( ../../standings_europe_2025_02_03.md)<br />
<br />
Final Rank Value:  827.2<br />
<br />
Final Rank Value (827.2) = Starting Rank Value (791.3) + Head To Head Adjustments (35.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.326[<sup>1</sup>](#table2)
- Bounty Collected: 0.319[<sup>2</sup>](#table1)
- Opponent Network: 0.082[<sup>2</sup>](#table1)
- LAN Wins: 0.080[<sup>2</sup>](#table1)

The average of these factors is 0.202<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 791.3
- 400 + ( ( 0.202 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 791.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |      119 | 2025-01-27 | Zero Tenacity   | L   | 1.000      | -            | -                | -                | -         |    -9.10 | adamS, hAdji, juanflatroo, meztal, Woro2k |
|           25 |     1209 | 2024-11-12 | FlyQuest        | L   | 0.650      | -            | -                | -                | -         |    -1.95 | hAdji, Kvem, meztal, SENER1, Woro2k       |
|           24 |     1239 | 2024-11-12 | The MongolZ     | L   | 0.644      | -            | -                | -                | -         |    -0.07 | hAdji, Kvem, meztal, SENER1, Woro2k       |
|           23 |     1272 | 2024-11-11 | Lynn Vision     | W   | 0.638      | 0.143        | 0.030 (0.003)    | 0.427 (0.039)    | 1 (0.638) |    13.56 | hAdji, Kvem, meztal, SENER1, Woro2k       |
|           22 |     1553 | 2024-10-27 | NAVI Junior     | L   | 0.538      | -            | -                | -                | -         |    -3.79 | hAdji, Kvem, meztal, SENER1, Woro2k       |
|           21 |     1577 | 2024-10-26 | L&G             | W   | 0.532      | 0.333        | 0.059 (0.010)    | 0.570 (0.101)    | 0 (0.000) |     8.90 | hAdji, Kvem, meztal, SENER1, Woro2k       |
|           20 |     1604 | 2024-10-25 | NAVI Junior     | L   | 0.525      | -            | -                | -                | -         |    -3.77 | hAdji, Kvem, meztal, SENER1, Woro2k       |
|           19 |     1625 | 2024-10-23 | GenOne          | W   | 0.512      | 0.333        | 0.020 (0.003)    | 0.618 (0.105)    | 0 (0.000) |     7.72 | hAdji, Kvem, meztal, SENER1, Woro2k       |
|           18 |     1642 | 2024-10-21 | L&G             | W   | 0.499      | 0.333        | 0.059 (0.010)    | 0.570 (0.095)    | 0 (0.000) |     8.42 | hAdji, Kvem, meztal, SENER1, Woro2k       |
|           17 |     1988 | 2024-10-06 | FAVBET          | L   | 0.399      | -            | -                | -                | -         |    -5.12 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|           16 |     2023 | 2024-10-05 | Monte           | L   | 0.392      | -            | -                | -                | -         |    -2.94 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|           15 |     2045 | 2024-10-04 | GamerLegion     | L   | 0.387      | -            | -                | -                | -         |    -0.28 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|           14 |     2136 | 2024-10-02 | los kogutos     | W   | 0.371      | 0.435        | 0.070 (0.011)    | 0.779 (0.126)    | 0 (0.000) |     9.42 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|           13 |     2199 | 2024-09-30 | ALTERNATE aTTaX | W   | 0.360      | 0.435        | 0.066 (0.010)    | 0.643 (0.101)    | 0 (0.000) |     8.63 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|           12 |     2207 | 2024-09-30 | TSM             | L   | 0.359      | -            | -                | -                | -         |    -4.76 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|           11 |     2261 | 2024-09-28 | Spirit Academy  | L   | 0.346      | -            | -                | -                | -         |    -2.49 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|           10 |     2362 | 2024-09-26 | FAVBET          | W   | 0.332      | 0.435        | 0.074 (0.011)    | 1.000 (0.144)    | 0 (0.000) |     6.63 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|            9 |     2457 | 2024-09-24 | Passion UA      | W   | 0.320      | 0.435        | 0.103 (0.014)    | 0.772 (0.107)    | 0 (0.000) |     8.38 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|            8 |     3164 | 2024-08-30 | Onyx Ravens     | W   | 0.152      | 0.143        | 0.020 (0.000)    | 0.031 (0.001)    | 0 (0.000) |     1.16 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|            7 |     3173 | 2024-08-30 | NOM             | W   | 0.152      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |     0.71 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|            6 |     3197 | 2024-08-29 | Superfkrs       | W   | 0.147      | 0.143        | -                | 0.021 (0.000)    | -         |     0.73 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|            5 |     3218 | 2024-08-29 | Bravado         | W   | 0.145      | -            | -                | -                | -         |     0.72 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|            4 |     3252 | 2024-08-28 | Al-Ittihad      | W   | 0.140      | -            | -                | -                | -         |     0.45 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|            3 |     3269 | 2024-08-28 | JiJieHao        | L   | 0.138      | -            | -                | -                | -         |    -2.89 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|            2 |     3510 | 2024-08-22 | Superfkrs       | L   | 0.100      | -            | -                | -                | -         |    -2.67 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|            1 |     3572 | 2024-08-21 | Al-Ittihad      | W   | 0.092      | -            | -                | -                | -         |     0.29 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,614.93)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
