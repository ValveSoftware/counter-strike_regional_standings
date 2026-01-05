### Roster Details<br />
Team Name: Timewaves<br />
Roster: camille, ElephanT, Harbor, Kezza, lawlkay<br />
Global Rank: [279](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_01_05.md)<br />
Regional Rank: [40]( ../../standings_asia_2026_01_05.md)<br />
<br />
Final Rank Value:  494.8<br />
<br />
Final Rank Value (494.8) = Starting Rank Value (500.8) + Head To Head Adjustments (-6.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.201[<sup>2</sup>](#table1)

The average of these factors is 0.051<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 500.8
- 400 + ( ( 0.051 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 500.8


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
|            7 |      494 | 2025-11-29 | Mindfreak       | L   | 0.956      | -            | -                | -                | -         |    -3.83 | camille, ElephanT, Harbor, Kezza, lawlkay |
|            6 |      495 | 2025-11-29 | Rooster         | L   | 0.955      | -            | -                | -                | -         |    -3.58 | camille, ElephanT, Harbor, Kezza, lawlkay |
|            5 |      537 | 2025-11-29 | The Bardolphs   | W   | 0.952      | 0.279        | 0.000 (0.000)    | 0.039 (0.010)    | 1 (0.952) |    12.82 | camille, ElephanT, Harbor, Kezza, lawlkay |
|            4 |      544 | 2025-11-28 | Mindfreak       | L   | 0.950      | -            | -                | -                | -         |    -3.43 | camille, ElephanT, Harbor, Kezza, lawlkay |
|            3 |      546 | 2025-11-28 | The Bardolphs   | W   | 0.949      | 0.279        | 0.000 (0.000)    | 0.039 (0.010)    | 1 (0.949) |    13.18 | camille, ElephanT, Harbor, Kezza, lawlkay |
|            2 |      809 | 2025-11-19 | LITE            | L   | 0.885      | -            | -                | -                | -         |    -9.04 | camille, ElephanT, Harbor, Kezza, lawlkay |
|            1 |      848 | 2025-11-16 | Animus Victoria | L   | 0.865      | -            | -                | -                | -         |   -12.17 | camille, ElephanT, Harbor, Kezza, lawlkay |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
