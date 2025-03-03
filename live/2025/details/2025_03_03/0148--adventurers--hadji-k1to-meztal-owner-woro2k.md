### Roster Details<br />
Team Name: Adventurers<br />
Roster: hAdji, k1to, meztal, OWNER, Woro2k<br />
Global Rank: [148](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_03.md)<br />
Regional Rank: [98]( ../../standings_europe_2025_03_03.md)<br />
<br />
Final Rank Value:  688.2<br />
<br />
Final Rank Value (688.2) = Starting Rank Value (704.9) + Head To Head Adjustments (-16.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.286[<sup>1</sup>](#table2)
- Bounty Collected: 0.261[<sup>2</sup>](#table1)
- Opponent Network: 0.033[<sup>2</sup>](#table1)
- LAN Wins: 0.053[<sup>2</sup>](#table1)

The average of these factors is 0.158<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 704.9
- 400 + ( ( 0.158 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 704.9


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
|           20 |      601 | 2025-02-04 | kONO            | L   | 1.000      | -            | -                | -                | -         |   -19.29 | hAdji, k1to, meztal, OWNER, Woro2k        |
|           19 |      673 | 2025-01-27 | Zero Tenacity   | L   | 0.966      | -            | -                | -                | -         |   -10.72 | adamS, hAdji, juanflatroo, meztal, Woro2k |
|           18 |      675 | 2025-01-26 | WildLotus       | L   | 0.961      | -            | -                | -                | -         |   -11.73 | adamS, hAdji, meztal, Nivera, Woro2k      |
|           17 |     1590 | 2024-11-12 | FlyQuest        | L   | 0.464      | -            | -                | -                | -         |    -2.42 | hAdji, Kvem, meztal, SENER1, Woro2k       |
|           16 |     1620 | 2024-11-12 | The MongolZ     | L   | 0.458      | -            | -                | -                | -         |    -0.02 | hAdji, Kvem, meztal, SENER1, Woro2k       |
|           15 |     1654 | 2024-11-11 | Lynn Vision     | W   | 0.452      | 0.143        | 0.011 (0.001)    | 0.329 (0.021)    | 1 (0.452) |     8.72 | hAdji, Kvem, meztal, SENER1, Woro2k       |
|           14 |     1941 | 2024-10-27 | NAVI Junior     | L   | 0.352      | -            | -                | -                | -         |    -2.42 | hAdji, Kvem, meztal, SENER1, Woro2k       |
|           13 |     1966 | 2024-10-26 | Leo             | W   | 0.346      | 0.333        | 0.024 (0.003)    | 0.539 (0.062)    | 0 (0.000) |     6.15 | hAdji, Kvem, meztal, SENER1, Woro2k       |
|           12 |     1994 | 2024-10-25 | NAVI Junior     | L   | 0.339      | -            | -                | -                | -         |    -2.35 | hAdji, Kvem, meztal, SENER1, Woro2k       |
|           11 |     2015 | 2024-10-23 | GenOne          | W   | 0.326      | 0.333        | 0.008 (0.001)    | 0.538 (0.058)    | 0 (0.000) |     5.72 | hAdji, Kvem, meztal, SENER1, Woro2k       |
|           10 |     2032 | 2024-10-21 | Leo             | W   | 0.313      | 0.333        | 0.024 (0.002)    | 0.539 (0.056)    | 0 (0.000) |     5.60 | hAdji, Kvem, meztal, SENER1, Woro2k       |
|            9 |     2397 | 2024-10-06 | FAVBET          | L   | 0.212      | -            | -                | -                | -         |    -2.61 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|            8 |     2434 | 2024-10-05 | Monte           | L   | 0.205      | -            | -                | -                | -         |    -2.06 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|            7 |     2456 | 2024-10-04 | GamerLegion     | L   | 0.201      | -            | -                | -                | -         |    -0.09 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|            6 |     2553 | 2024-10-02 | Permitta        | W   | 0.185      | 0.435        | 0.027 (0.002)    | 0.364 (0.029)    | 0 (0.000) |     4.38 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|            5 |     2622 | 2024-09-30 | ALTERNATE aTTaX | W   | 0.174      | 0.435        | 0.020 (0.002)    | 0.371 (0.028)    | 0 (0.000) |     3.89 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|            4 |     2630 | 2024-09-30 | TSM             | L   | 0.172      | -            | -                | -                | -         |    -2.54 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|            3 |     2685 | 2024-09-28 | Spirit Academy  | L   | 0.160      | -            | -                | -                | -         |    -1.28 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|            2 |     2789 | 2024-09-26 | FAVBET          | W   | 0.146      | 0.435        | 0.029 (0.002)    | 0.671 (0.042)    | 0 (0.000) |     2.89 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |
|            1 |     2889 | 2024-09-24 | Passion UA      | W   | 0.133      | 0.435        | 0.041 (0.002)    | 0.575 (0.033)    | 0 (0.000) |     3.46 | AMSALEM, hAdji, Kvem, meztal, Woro2k      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,055.86)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-27 |      0.352 | $3,000.00      | $1,055.86       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
