### Roster Details<br />
Team Name: FlyQuest RED<br />
Roster: BiBiAhn, Emy, GooseBreeder, Shakezullah, vanessa<br />
Global Rank: [144](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [39]( ../standings_americas.md)<br />
<br />
Final Rank Value:  724.5<br />
<br />
Final Rank Value (724.5) = Starting Rank Value (701.6) + Head To Head Adjustments (22.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.356[<sup>1</sup>](#table2)
- Bounty Collected: 0.247[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.153<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 701.6
- 400 + ( ( 0.153 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 701.6


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
|           15 |     1718 | 2024-06-06 | Elevate          | L   | 0.741      | -            | -                | -                | -         |    -4.72 | BiBiAhn, Emy, GooseBreeder, Shakezullah, vanessa |
|           14 |     1925 | 2024-06-01 | HSG fe           | L   | 0.706      | -            | -                | -                | -         |    -9.10 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|           13 |     1962 | 2024-05-31 | BIG EQUIPA       | L   | 0.699      | -            | -                | -                | -         |   -10.76 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|           12 |     2067 | 2024-05-26 | TSM Shimmer      | W   | 0.667      | 0.303        | 0.019 (0.004)    | 0.176 (0.036)    | 0 (0.000) |     9.90 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|           11 |     2071 | 2024-05-26 | Lotus fe         | W   | 0.666      | 0.303        | 0.004 (0.001)    | 0.035 (0.007)    | 0 (0.000) |     7.60 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|           10 |     3022 | 2024-04-19 | Nouns fe         | W   | 0.421      | 0.322        | 0.003 (0.000)    | 0.026 (0.004)    | 0 (0.000) |     4.81 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            9 |     3199 | 2024-04-14 | TSM Shimmer      | W   | 0.388      | 0.250        | 0.019 (0.002)    | 0.176 (0.017)    | 0 (0.000) |     5.89 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            8 |     3281 | 2024-04-10 | cleanup crew fe  | W   | 0.361      | 0.322        | 0.002 (0.000)    | 0.015 (0.002)    | 0 (0.000) |     4.03 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            7 |     3469 | 2024-04-04 | COVEN            | W   | 0.321      | -            | -                | -                | 0 (0.000) |     2.52 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            6 |     3618 | 2024-03-28 | WG Bandits       | W   | 0.275      | -            | -                | -                | 0 (0.000) |     3.08 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            5 |     3767 | 2024-03-20 | Limitless Angels | W   | 0.222      | 0.322        | 0.002 (0.000)    | 0.037 (0.003)    | 0 (0.000) |     2.78 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            4 |     3913 | 2024-03-13 | Karma            | W   | 0.175      | 0.322        | 0.003 (0.000)    | 0.058 (0.003)    | 0 (0.000) |     2.26 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            3 |     4088 | 2024-03-06 | TSM Shimmer      | W   | 0.129      | 0.322        | 0.019 (0.001)    | 0.176 (0.007)    | 0 (0.000) |     1.97 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            2 |     4176 | 2024-03-03 | TSM Shimmer      | W   | 0.108      | 0.250        | 0.019 (0.001)    | 0.176 (0.005)    | -         |     1.66 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            1 |     4318 | 2024-02-25 | TSM Shimmer      | W   | 0.061      | 0.250        | 0.019 (0.000)    | 0.176 (0.003)    | -         |     0.95 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,940.67)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      0.714 | $4,000.00      | $2,855.35       |
| 2024-05-26 |      0.667 | $2,500.00      | $1,667.89       |
| 2024-04-14 |      0.388 | $750.00        | $290.78         |
| 2024-03-03 |      0.108 | $750.00        | $80.83          |
| 2024-02-25 |      0.061 | $750.00        | $45.82          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
