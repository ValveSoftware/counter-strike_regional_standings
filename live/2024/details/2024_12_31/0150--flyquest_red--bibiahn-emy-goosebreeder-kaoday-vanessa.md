### Roster Details<br />
Team Name: FlyQuest RED<br />
Roster: BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa<br />
Global Rank: [150](../../standings_global_2024_12_31.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_12_31.md)<br />
Regional Rank: [37]( ../../standings_americas_2024_12_31.md)<br />
<br />
Final Rank Value:  721.3<br />
<br />
Final Rank Value (721.3) = Starting Rank Value (692.6) + Head To Head Adjustments (28.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.351[<sup>1</sup>](#table2)
- Bounty Collected: 0.240[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.150<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 692.6
- 400 + ( ( 0.150 - 0.000 ) / ( 0.821 - 0.000 ) ) * 1600 = 692.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      567 | 2024-11-23 | NAVI Javelins    | L   | 0.958      | -            | -                | -                | -         |    -1.78 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa |
|           10 |      598 | 2024-11-22 | Fluxo Demons     | L   | 0.951      | -            | -                | -                | -         |    -9.94 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa |
|            9 |     1314 | 2024-10-18 | Aware fe         | W   | 0.722      | 0.333        | 0.003 (0.001)    | 0.025 (0.006)    | 0 (0.000) |     7.63 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa |
|            8 |     1716 | 2024-10-02 | Blue Otter Karma | W   | 0.615      | 0.333        | 0.003 (0.001)    | 0.041 (0.008)    | 0 (0.000) |     7.22 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa |
|            7 |     1939 | 2024-09-26 | Lotus fe         | W   | 0.575      | 0.333        | 0.003 (0.001)    | 0.021 (0.004)    | 0 (0.000) |     6.60 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa |
|            6 |     2193 | 2024-09-19 | Shimmer          | W   | 0.529      | 0.333        | 0.017 (0.003)    | 0.222 (0.039)    | 0 (0.000) |     8.05 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa |
|            5 |     2314 | 2024-09-15 | Arf Squad fe     | L   | 0.502      | -            | -                | -                | -         |    -9.63 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa |
|            4 |     2444 | 2024-09-11 | Nouns fe         | W   | 0.475      | 0.333        | 0.004 (0.001)    | 0.075 (0.012)    | 0 (0.000) |     5.96 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa |
|            3 |     2647 | 2024-09-04 | TSM Impact       | W   | 0.428      | 0.333        | 0.005 (0.001)    | 0.091 (0.013)    | 0 (0.000) |     6.12 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa |
|            2 |     2793 | 2024-08-29 | FLUFFY MAFIA     | W   | 0.388      | 0.333        | 0.005 (0.001)    | 0.114 (0.015)    | 0 (0.000) |     5.52 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa |
|            1 |     3039 | 2024-08-25 | Imp Pact fe      | W   | 0.361      | 0.250        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.97 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,262.34)
- Divide that value by the 5th highest value among all rosters ($298,653.52)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.966 | $4,000.00      | $3,865.86       |
| 2024-09-15 |      0.502 | $250.00        | $125.40         |
| 2024-08-25 |      0.361 | $750.00        | $271.07         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
