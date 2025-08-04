### Roster Details<br />
Team Name: Vantage<br />
Roster: Drox, Jynx, Mingovi, Snaaz, supar<br />
Global Rank: [259](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_08_04.md)<br />
Regional Rank: [41]( ../../standings_asia_2025_08_04.md)<br />
<br />
Final Rank Value:  488.3<br />
<br />
Final Rank Value (488.3) = Starting Rank Value (486.3) + Head To Head Adjustments (2.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.181[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.046<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 486.3
- 400 + ( ( 0.046 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 486.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     2468 | 2025-03-28 | FURY          | L   | 0.344      | -            | -                | -                | -         |    -3.49 | Drox, Jynx, Mingovi, supar, swerzieN |
|            9 |     2526 | 2025-03-28 | SemperFi      | L   | 0.338      | -            | -                | -                | -         |    -1.65 | Drox, Jynx, Mingovi, Snaaz, supar    |
|            8 |     2605 | 2025-03-27 | Only One Word | W   | 0.331      | 0.143        | 0.001 (0.000)    | 0.122 (0.006)    | 0 (0.000) |     7.98 | Drox, Jynx, Mingovi, supar, swerzieN |
|            7 |     2778 | 2025-03-21 | Mindfreak     | L   | 0.291      | -            | -                | -                | -         |    -2.77 | Drox, Jynx, Mingovi, supar, swerzieN |
|            6 |     2782 | 2025-03-20 | ex-TALON      | L   | 0.289      | -            | -                | -                | -         |    -2.03 | Drox, Jynx, Mingovi, supar, swerzieN |
|            5 |     3549 | 2025-02-25 | Only One Word | L   | 0.137      | -            | -                | -                | -         |    -1.03 | Drox, Jynx, Mingovi, supar, swerzieN |
|            4 |     3585 | 2025-02-24 | ex-TALON      | L   | 0.131      | -            | -                | -                | -         |    -0.93 | Drox, Jynx, Mingovi, supar, swerzieN |
|            3 |     3618 | 2025-02-23 | Rooster       | W   | 0.122      | 0.143        | 0.010 (0.000)    | 0.267 (0.005)    | 0 (0.000) |     3.04 | Drox, Jynx, Mingovi, supar, swerzieN |
|            2 |     3859 | 2025-02-14 | Ground Zero   | W   | 0.064      | 0.143        | 0.005 (0.000)    | 0.211 (0.002)    | 0 (0.000) |     1.52 | Drox, Jynx, Mingovi, supar, swerzieN |
|            1 |     3862 | 2025-02-14 | FURY          | W   | 0.063      | 0.143        | 0.001 (0.000)    | 0.181 (0.002)    | 0 (0.000) |     1.36 | Drox, Jynx, Mingovi, supar, swerzieN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($440,967.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
