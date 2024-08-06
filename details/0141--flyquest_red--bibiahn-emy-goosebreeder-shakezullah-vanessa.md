### Roster Details<br />
Team Name: FlyQuest RED<br />
Roster: BiBiAhn, Emy, GooseBreeder, Shakezullah, vanessa<br />
Global Rank: [141](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [37]( ../standings_americas.md)<br />
<br />
Final Rank Value:  749.7<br />
<br />
Final Rank Value (749.7) = Starting Rank Value (721.8) + Head To Head Adjustments (27.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.361[<sup>1</sup>](#table2)
- Bounty Collected: 0.254[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.156<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 721.8
- 400 + ( ( 0.156 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 721.8


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
|           15 |     1445 | 2024-06-06 | Elevate          | L   | 0.795      | -            | -                | -                | -         |    -4.95 | BiBiAhn, Emy, GooseBreeder, Shakezullah, vanessa |
|           14 |     1652 | 2024-06-01 | HSG fe           | L   | 0.760      | -            | -                | -                | -         |    -9.58 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|           13 |     1689 | 2024-05-31 | BIG EQUIPA       | L   | 0.753      | -            | -                | -                | -         |   -11.50 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|           12 |     1794 | 2024-05-26 | TSM Shimmer      | W   | 0.721      | 0.303        | 0.020 (0.004)    | 0.191 (0.042)    | 0 (0.000) |    10.48 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|           11 |     1798 | 2024-05-26 | Lotus fe         | W   | 0.720      | 0.303        | 0.004 (0.001)    | 0.037 (0.008)    | 0 (0.000) |     7.81 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|           10 |     2749 | 2024-04-19 | Nouns fe         | W   | 0.475      | 0.322        | 0.003 (0.001)    | 0.032 (0.005)    | 0 (0.000) |     5.20 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            9 |     2926 | 2024-04-14 | TSM Shimmer      | W   | 0.442      | 0.250        | 0.020 (0.002)    | 0.191 (0.021)    | 0 (0.000) |     6.58 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            8 |     3008 | 2024-04-10 | cleanup crew fe  | W   | 0.415      | 0.322        | 0.002 (0.000)    | 0.020 (0.003)    | 0 (0.000) |     4.43 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            7 |     3196 | 2024-04-04 | COVEN            | W   | 0.375      | -            | -                | -                | 0 (0.000) |     2.71 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            6 |     3345 | 2024-03-28 | WG Bandits       | W   | 0.329      | -            | -                | -                | 0 (0.000) |     3.52 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            5 |     3494 | 2024-03-20 | Limitless Angels | W   | 0.276      | 0.322        | 0.003 (0.000)    | 0.045 (0.004)    | 0 (0.000) |     3.37 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            4 |     3640 | 2024-03-13 | Karma            | W   | 0.229      | 0.322        | 0.004 (0.000)    | 0.068 (0.005)    | 0 (0.000) |     2.88 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            3 |     3815 | 2024-03-06 | TSM Shimmer      | W   | 0.183      | 0.322        | 0.020 (0.001)    | 0.191 (0.011)    | 0 (0.000) |     2.74 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            2 |     3903 | 2024-03-03 | TSM Shimmer      | W   | 0.162      | 0.250        | 0.020 (0.001)    | 0.191 (0.008)    | -         |     2.46 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            1 |     4045 | 2024-02-25 | TSM Shimmer      | W   | 0.115      | 0.250        | 0.020 (0.001)    | 0.191 (0.005)    | -         |     1.77 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,413.86)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      0.768 | $4,000.00      | $3,071.66       |
| 2024-05-26 |      0.721 | $2,500.00      | $1,803.08       |
| 2024-04-14 |      0.442 | $750.00        | $331.34         |
| 2024-03-03 |      0.162 | $750.00        | $121.39         |
| 2024-02-25 |      0.115 | $750.00        | $86.38          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
