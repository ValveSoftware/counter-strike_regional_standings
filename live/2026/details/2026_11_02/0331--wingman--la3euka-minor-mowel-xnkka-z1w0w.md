### Roster Details<br />
Team Name: Wingman<br />
Roster: la3euka, Minor, MoWeL, xnkka, Z1W0W<br />
Global Rank: [331](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [219]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  506.4<br />
<br />
Final Rank Value (506.4) = Starting Rank Value (491.5) + Head To Head Adjustments (14.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.145[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.048[<sup>2</sup>](#table1)

The average of these factors is 0.049<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 491.5
- 400 + ( ( 0.049 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 491.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     4127 | 2026-07-17 | QUAZAR          | L   | 0.482      | -            | -                | -                | -         |    -0.41 | la3euka, Minor, MoWeL, xnkka, Z1W0W |
|            7 |     4144 | 2026-07-17 | PRIVATE         | L   | 0.479      | -            | -                | -                | -         |    -0.13 | la3euka, Minor, MoWeL, xnkka, Z1W0W |
|            6 |     4158 | 2026-07-17 | NEW VISION      | W   | 0.478      | 0.303        | 0.000 (0.000)    | 0.135 (0.020)    | 1 (0.478) |     8.57 | la3euka, Minor, MoWeL, xnkka, Z1W0W |
|            5 |     4669 | 2026-06-15 | Lilmix          | L   | 0.268      | -            | -                | -                | -         |    -1.64 | la3euka, Minor, MoWeL, xnkka, Z1W0W |
|            4 |     4787 | 2026-06-12 | XI              | W   | 0.246      | 0.143        | 0.000 (0.000)    | 0.052 (0.002)    | 0 (0.000) |     4.96 | la3euka, Minor, MoWeL, xnkka, Z1W0W |
|            3 |     4819 | 2026-06-10 | eternal premium | W   | 0.234      | 0.143        | 0.000 (0.000)    | 0.137 (0.005)    | 0 (0.000) |     4.16 | la3euka, Minor, MoWeL, xnkka, Z1W0W |
|            2 |     4976 | 2026-06-03 | TTG             | L   | 0.188      | -            | -                | -                | -         |    -2.79 | la3euka, Minor, MoWeL, xnkka, Z1W0W |
|            1 |     5000 | 2026-06-02 | ENRAGE          | W   | 0.181      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.13 | la3euka, Minor, MoWeL, xnkka, Z1W0W |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
