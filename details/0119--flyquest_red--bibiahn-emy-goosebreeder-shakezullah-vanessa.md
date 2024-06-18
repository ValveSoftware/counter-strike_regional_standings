### Roster Details<br />
Team Name: FlyQuest RED<br />
Roster: BiBiAhn, Emy, GooseBreeder, Shakezullah, vanessa<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [119](../standings_global.md)<br />
Regional Rank: [30]( ../standings_americas.md)<br />
Final Rank Value:  810.9<br />
<br />
Final Rank Value (810.9) = Starting Rank Value (759.8) + Head To Head Adjustments (51.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.390[<sup>1</sup>](#table2)
- Bounty Collected: 0.285[<sup>2</sup>](#table1)
- Opponent Network: 0.033[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.177<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 759.8
- 400 + ( ( 0.177 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 759.8


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
|           17 |      407 | 2024-06-06 | Elevate          | L   | 1.000      | -            | -                | -                | -         |    -8.13 | BiBiAhn, Emy, GooseBreeder, Shakezullah, vanessa |
|           16 |      616 | 2024-06-01 | HSG fe           | L   | 1.000      | -            | -                | -                | -         |   -13.52 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|           15 |      653 | 2024-05-31 | BIG EQUIPA       | L   | 1.000      | -            | -                | -                | -         |   -15.95 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|           14 |      758 | 2024-05-26 | TSM Shimmer      | W   | 1.000      | 0.303        | 0.027 (0.008)    | 0.270 (0.082)    | 0 (0.000) |    12.28 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|           13 |      762 | 2024-05-26 | Limitless Angels | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.89 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|           12 |     1713 | 2024-04-19 | Nouns fe         | W   | 0.804      | 0.322        | 0.003 (0.001)    | 0.065 (0.017)    | 0 (0.000) |     6.88 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|           11 |     1890 | 2024-04-14 | TSM Shimmer      | W   | 0.771      | 0.250        | 0.027 (0.005)    | 0.270 (0.052)    | 0 (0.000) |     9.67 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|           10 |     1972 | 2024-04-10 | cleanup crew fe  | W   | 0.744      | -            | -                | -                | 0 (0.000) |     6.23 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            9 |     2160 | 2024-04-04 | COVEN            | W   | 0.704      | -            | -                | -                | 0 (0.000) |     3.60 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            8 |     2310 | 2024-03-28 | WG Bandits       | W   | 0.658      | -            | -                | -                | 0 (0.000) |     5.59 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            7 |     2459 | 2024-03-20 | Limitless Angels | W   | 0.605      | 0.322        | 0.005 (0.001)    | 0.088 (0.017)    | 0 (0.000) |     6.51 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            6 |     2605 | 2024-03-13 | Karma            | W   | 0.558      | 0.322        | 0.006 (0.001)    | 0.121 (0.022)    | 0 (0.000) |     6.18 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            5 |     2780 | 2024-03-06 | TSM Shimmer      | W   | 0.512      | 0.322        | 0.027 (0.004)    | 0.270 (0.044)    | 0 (0.000) |     6.40 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            4 |     2868 | 2024-03-03 | TSM Shimmer      | W   | 0.491      | 0.250        | 0.027 (0.003)    | 0.270 (0.033)    | -         |     6.40 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            3 |     3010 | 2024-02-25 | TSM Shimmer      | W   | 0.444      | 0.250        | 0.027 (0.003)    | 0.270 (0.030)    | -         |     6.03 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            2 |     3425 | 2024-02-04 | TSM Shimmer      | W   | 0.304      | 0.250        | 0.027 (0.002)    | 0.270 (0.021)    | -         |     4.26 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            1 |     3580 | 2024-01-28 | TSM Shimmer      | W   | 0.257      | 0.250        | 0.027 (0.002)    | 0.270 (0.017)    | -         |     3.70 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,200.49)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-05-26 |      1.000 | $2,500.00      | $2,500.00       |
| 2024-04-14 |      0.771 | $750.00        | $578.06         |
| 2024-03-03 |      0.491 | $750.00        | $368.11         |
| 2024-02-25 |      0.444 | $750.00        | $333.10         |
| 2024-02-04 |      0.304 | $750.00        | $228.11         |
| 2024-01-28 |      0.257 | $750.00        | $193.10         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
