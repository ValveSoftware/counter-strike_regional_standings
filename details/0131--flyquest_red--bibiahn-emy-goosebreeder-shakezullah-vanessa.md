### Roster Details<br />
Team Name: FlyQuest RED<br />
Roster: BiBiAhn, Emy, GooseBreeder, Shakezullah, vanessa<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [131](../standings_global.md)<br />
Regional Rank: [34]( ../standings_americas.md)<br />
Final Rank Value:  803.8<br />
<br />
Final Rank Value (803.8) = Starting Rank Value (766.3) + Head To Head Adjustments (37.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.390[<sup>1</sup>](#table2)
- Bounty Collected: 0.274[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.171<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 766.3
- 400 + ( ( 0.171 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 766.3


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
|           17 |      707 | 2024-06-06 | Elevate          | L   | 0.928      | -            | -                | -                | -         |    -5.71 | BiBiAhn, Emy, GooseBreeder, Shakezullah, vanessa |
|           16 |      914 | 2024-06-01 | HSG fe           | L   | 0.894      | -            | -                | -                | -         |   -10.74 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|           15 |      951 | 2024-05-31 | BIG EQUIPA       | L   | 0.887      | -            | -                | -                | -         |   -13.47 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|           14 |     1056 | 2024-05-26 | TSM Shimmer      | W   | 0.855      | 0.303        | 0.028 (0.007)    | 0.217 (0.056)    | 0 (0.000) |    11.61 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|           13 |     1060 | 2024-05-26 | Lotus fe         | W   | 0.854      | 0.303        | 0.007 (0.002)    | 0.041 (0.011)    | 0 (0.000) |     8.04 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|           12 |     2011 | 2024-04-19 | Nouns fe         | W   | 0.609      | 0.322        | 0.003 (0.001)    | -                | 0 (0.000) |     3.65 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|           11 |     2188 | 2024-04-14 | TSM Shimmer      | W   | 0.575      | 0.250        | 0.028 (0.004)    | 0.217 (0.031)    | 0 (0.000) |     7.97 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|           10 |     2270 | 2024-04-10 | cleanup crew fe  | W   | 0.549      | 0.322        | -                | 0.032 (0.006)    | 0 (0.000) |     5.13 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            9 |     2458 | 2024-04-04 | COVEN            | W   | 0.509      | -            | -                | -                | 0 (0.000) |     2.97 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            8 |     2607 | 2024-03-28 | WG Bandits       | W   | 0.462      | -            | -                | -                | 0 (0.000) |     4.35 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            7 |     2756 | 2024-03-20 | Limitless Angels | W   | 0.409      | 0.322        | 0.004 (0.001)    | 0.070 (0.009)    | 0 (0.000) |     4.62 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            6 |     2902 | 2024-03-13 | Karma            | W   | 0.362      | 0.322        | 0.006 (0.001)    | 0.100 (0.012)    | 0 (0.000) |     4.24 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            5 |     3077 | 2024-03-06 | TSM Shimmer      | W   | 0.317      | 0.322        | 0.028 (0.003)    | 0.217 (0.022)    | 0 (0.000) |     4.42 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            4 |     3165 | 2024-03-03 | TSM Shimmer      | W   | 0.296      | 0.250        | 0.028 (0.002)    | 0.217 (0.016)    | -         |     4.23 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            3 |     3307 | 2024-02-25 | TSM Shimmer      | W   | 0.249      | 0.250        | 0.028 (0.002)    | 0.217 (0.014)    | -         |     3.65 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            2 |     3722 | 2024-02-04 | TSM Shimmer      | W   | 0.109      | 0.250        | 0.028 (0.001)    | 0.217 (0.006)    | -         |     1.61 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            1 |     3877 | 2024-01-28 | TSM Shimmer      | W   | 0.062      | -            | -                | -                | -         |     0.93 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,711.82)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      0.902 | $4,000.00      | $3,606.37       |
| 2024-05-26 |      0.855 | $2,500.00      | $2,137.28       |
| 2024-04-14 |      0.575 | $750.00        | $431.60         |
| 2024-03-03 |      0.296 | $750.00        | $221.65         |
| 2024-02-25 |      0.249 | $750.00        | $186.64         |
| 2024-02-04 |      0.109 | $750.00        | $81.65          |
| 2024-01-28 |      0.062 | $750.00        | $46.64          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
