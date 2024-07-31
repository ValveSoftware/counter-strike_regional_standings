### Roster Details<br />
Team Name: FlyQuest RED<br />
Roster: BiBiAhn, Emy, GooseBreeder, Shakezullah, vanessa<br />
Global Rank: [135](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [35]( ../standings_americas.md)<br />
<br />
Final Rank Value:  758.2<br />
<br />
Final Rank Value (758.2) = Starting Rank Value (727.0) + Head To Head Adjustments (31.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.363[<sup>1</sup>](#table2)
- Bounty Collected: 0.258[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.158<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 727.0
- 400 + ( ( 0.158 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 727.0


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
|           16 |     1237 | 2024-06-06 | Elevate          | L   | 0.834      | -            | -                | -                | -         |    -5.45 | BiBiAhn, Emy, GooseBreeder, Shakezullah, vanessa |
|           15 |     1444 | 2024-06-01 | HSG fe           | L   | 0.799      | -            | -                | -                | -         |   -10.09 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|           14 |     1481 | 2024-05-31 | BIG EQUIPA       | L   | 0.792      | -            | -                | -                | -         |   -12.16 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|           13 |     1586 | 2024-05-26 | TSM Shimmer      | W   | 0.760      | 0.303        | 0.021 (0.005)    | 0.200 (0.046)    | 0 (0.000) |    10.87 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|           12 |     1590 | 2024-05-26 | Lotus fe         | W   | 0.759      | 0.303        | 0.005 (0.001)    | 0.038 (0.009)    | 0 (0.000) |     7.98 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|           11 |     2541 | 2024-04-19 | Nouns fe         | W   | 0.514      | 0.322        | 0.004 (0.001)    | 0.037 (0.006)    | 0 (0.000) |     5.49 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|           10 |     2718 | 2024-04-14 | TSM Shimmer      | W   | 0.481      | 0.250        | 0.021 (0.002)    | 0.200 (0.024)    | 0 (0.000) |     7.06 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            9 |     2800 | 2024-04-10 | cleanup crew fe  | W   | 0.455      | 0.322        | 0.002 (0.000)    | 0.023 (0.003)    | 0 (0.000) |     4.72 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            8 |     2988 | 2024-04-04 | COVEN            | W   | 0.414      | -            | -                | -                | 0 (0.000) |     2.87 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            7 |     3137 | 2024-03-28 | WG Bandits       | W   | 0.368      | -            | -                | -                | 0 (0.000) |     3.84 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            6 |     3286 | 2024-03-20 | Limitless Angels | W   | 0.315      | 0.322        | 0.003 (0.000)    | 0.051 (0.005)    | 0 (0.000) |     3.80 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            5 |     3432 | 2024-03-13 | Karma            | W   | 0.268      | 0.322        | 0.004 (0.000)    | 0.075 (0.006)    | 0 (0.000) |     3.34 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            4 |     3607 | 2024-03-06 | TSM Shimmer      | W   | 0.222      | 0.322        | 0.021 (0.001)    | 0.200 (0.014)    | 0 (0.000) |     3.28 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            3 |     3695 | 2024-03-03 | TSM Shimmer      | W   | 0.201      | 0.250        | 0.021 (0.001)    | 0.200 (0.010)    | -         |     3.03 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            2 |     3837 | 2024-02-25 | TSM Shimmer      | W   | 0.154      | 0.250        | 0.021 (0.001)    | 0.200 (0.008)    | -         |     2.36 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |
|            1 |     4252 | 2024-02-04 | TSM Shimmer      | W   | 0.014      | -            | -                | -                | -         |     0.22 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,767.31)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-02 |      0.807 | $4,000.00      | $3,228.32       |
| 2024-05-26 |      0.760 | $2,500.00      | $1,901.00       |
| 2024-04-14 |      0.481 | $750.00        | $360.71         |
| 2024-03-03 |      0.201 | $750.00        | $150.77         |
| 2024-02-25 |      0.154 | $750.00        | $115.75         |
| 2024-02-04 |      0.014 | $750.00        | $10.76          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
