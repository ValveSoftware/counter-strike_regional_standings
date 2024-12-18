### Roster Details<br />
Team Name: FlyQuest RED<br />
Roster: BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa<br />
Global Rank: [151](../../standings_global_2024_12_18.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_12_18.md)<br />
Regional Rank: [38]( ../../standings_americas_2024_12_18.md)<br />
<br />
Final Rank Value:  720.4<br />
<br />
Final Rank Value (720.4) = Starting Rank Value (687.3) + Head To Head Adjustments (33.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.346[<sup>1</sup>](#table2)
- Bounty Collected: 0.242[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.150<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 687.3
- 400 + ( ( 0.150 - 0.000 ) / ( 0.835 - 0.000 ) ) * 1600 = 687.3


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
|           11 |      484 | 2024-11-23 | NAVI Javelins    | L   | 1.000      | -            | -                | -                | -         |    -1.91 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa |
|           10 |      515 | 2024-11-22 | Fluxo Demons     | L   | 1.000      | -            | -                | -                | -         |   -10.74 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa |
|            9 |     1231 | 2024-10-18 | Aware fe         | W   | 0.795      | 0.333        | 0.002 (0.001)    | 0.027 (0.007)    | 0 (0.000) |     8.18 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa |
|            8 |     1633 | 2024-10-02 | Blue Otter Karma | W   | 0.689      | 0.333        | 0.003 (0.001)    | 0.046 (0.010)    | 0 (0.000) |     7.96 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa |
|            7 |     1856 | 2024-09-26 | Lotus fe         | W   | 0.649      | 0.333        | 0.003 (0.001)    | 0.023 (0.005)    | 0 (0.000) |     7.33 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa |
|            6 |     2110 | 2024-09-19 | Shimmer          | W   | 0.602      | 0.333        | 0.016 (0.003)    | 0.234 (0.047)    | 0 (0.000) |     9.07 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa |
|            5 |     2231 | 2024-09-15 | Arf Squad fe     | L   | 0.575      | -            | -                | -                | -         |   -10.99 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa |
|            4 |     2361 | 2024-09-11 | Nouns fe         | W   | 0.549      | 0.333        | 0.004 (0.001)    | 0.080 (0.015)    | 0 (0.000) |     6.77 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa |
|            3 |     2564 | 2024-09-04 | TSM Impact       | W   | 0.502      | 0.333        | 0.005 (0.001)    | 0.099 (0.017)    | 0 (0.000) |     7.24 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa |
|            2 |     2710 | 2024-08-29 | FLUFFY MAFIA     | W   | 0.462      | 0.333        | 0.005 (0.001)    | 0.124 (0.019)    | 0 (0.000) |     6.57 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa |
|            1 |     2956 | 2024-08-25 | Imp Pact fe      | W   | 0.435      | 0.250        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.63 | BiBiAhn, Emy, GooseBreeder, Kaoday, vanessa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,470.10)
- Divide that value by the 5th highest value among all rosters ($344,999.34)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-09-15 |      0.575 | $250.00        | $143.81         |
| 2024-08-25 |      0.435 | $750.00        | $326.29         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
