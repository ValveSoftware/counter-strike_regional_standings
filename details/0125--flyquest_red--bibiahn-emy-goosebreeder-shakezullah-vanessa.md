### Roster Details<br />
Team Name: FlyQuest RED<br />
Roster: BiBiAhn, Emy, GooseBreeder, Shakezullah, vanessa<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [125](../standings_global.md)<br />
Regional Rank: [33]( ../standings_americas.md)<br />
Final Rank Value:  804.0<br />
<br />
Final Rank Value (804.0) = Starting Rank Value (763.0) + Head To Head Adjustments (41.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.391[<sup>1</sup>](#table2)
- Bounty Collected: 0.277[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.172<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 763.0
- 400 + ( ( 0.172 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 763.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |      543 | 2024-06-06 | Elevate          | L   | 0.968      | -            | -                | -                | -         |    -6.07 | BiBiAhn, Emy, GooseBreeder, Shakezullah, vanessa |
|           16 |      750 | 2024-06-01 | HSG fe           | L   | 0.933      | -            | -                | -                | -         |   -11.34 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|           15 |      787 | 2024-05-31 | BIG EQUIPA       | L   | 0.926      | -            | -                | -                | -         |   -14.12 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|           14 |      892 | 2024-05-26 | TSM Shimmer      | W   | 0.895      | 0.303        | 0.028 (0.008)    | 0.228 (0.062)    | 0 (0.000) |    11.93 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|           13 |      896 | 2024-05-26 | Lotus fe         | W   | 0.893      | 0.303        | 0.006 (0.002)    | 0.041 (0.011)    | 0 (0.000) |     8.16 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|           12 |     1847 | 2024-04-19 | Nouns fe         | W   | 0.649      | 0.322        | 0.003 (0.001)    | -                | 0 (0.000) |     3.81 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|           11 |     2024 | 2024-04-14 | TSM Shimmer      | W   | 0.615      | 0.250        | 0.028 (0.004)    | 0.228 (0.035)    | 0 (0.000) |     8.37 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|           10 |     2106 | 2024-04-10 | cleanup crew fe  | W   | 0.589      | 0.322        | -                | 0.035 (0.007)    | 0 (0.000) |     5.38 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            9 |     2294 | 2024-04-04 | COVEN            | W   | 0.548      | -            | -                | -                | 0 (0.000) |     3.12 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            8 |     2443 | 2024-03-28 | WG Bandits       | W   | 0.502      | -            | -                | -                | 0 (0.000) |     4.63 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            7 |     2592 | 2024-03-20 | Limitless Angels | W   | 0.449      | 0.322        | -                | 0.076 (0.011)    | 0 (0.000) |     5.02 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            6 |     2738 | 2024-03-13 | Karma            | W   | 0.402      | 0.322        | 0.006 (0.001)    | 0.108 (0.014)    | 0 (0.000) |     4.65 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            5 |     2913 | 2024-03-06 | TSM Shimmer      | W   | 0.356      | 0.322        | 0.028 (0.003)    | 0.228 (0.026)    | 0 (0.000) |     4.87 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            4 |     3001 | 2024-03-03 | TSM Shimmer      | W   | 0.335      | 0.250        | 0.028 (0.002)    | 0.228 (0.019)    | -         |     4.72 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            3 |     3143 | 2024-02-25 | TSM Shimmer      | W   | 0.288      | 0.250        | 0.028 (0.002)    | 0.228 (0.016)    | -         |     4.17 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            2 |     3558 | 2024-02-04 | TSM Shimmer      | W   | 0.148      | 0.250        | 0.028 (0.001)    | 0.228 (0.008)    | -         |     2.18 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            1 |     3713 | 2024-01-28 | TSM Shimmer      | W   | 0.102      | 0.250        | 0.028 (0.001)    | -                | -         |     1.51 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,117.83)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      0.941 | $4,000.00      | $3,764.81       |
| 2024-05-26 |      0.895 | $2,500.00      | $2,236.30       |
| 2024-04-14 |      0.615 | $750.00        | $461.31         |
| 2024-03-03 |      0.335 | $750.00        | $251.36         |
| 2024-02-25 |      0.288 | $750.00        | $216.34         |
| 2024-02-04 |      0.148 | $750.00        | $111.35         |
| 2024-01-28 |      0.102 | $750.00        | $76.35          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
