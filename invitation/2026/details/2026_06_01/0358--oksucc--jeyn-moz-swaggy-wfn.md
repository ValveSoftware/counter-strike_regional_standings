### Roster Details<br />
Team Name: OKSUCC<br />
Roster: jeyN, moz, swaggy, wfn<br />
Global Rank: [358](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [216]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  417.2<br />
<br />
Final Rank Value (417.2) = Starting Rank Value (401.0) + Head To Head Adjustments (16.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.001<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 401.0
- 400 + ( ( 0.001 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 401.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |       70 | 2026-05-29 | Dripmen          | L   | 1.000      | -            | -                | -                | -         |    -5.78 | jeyN, moz, N0R1, swaggy, wfn |
|            5 |      214 | 2026-05-25 | SSSghoul         | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    14.74 | jeyN, moz, N0R1, swaggy, wfn |
|            4 |     2185 | 2026-04-01 | ex-Zero Tenacity | L   | 0.792      | -            | -                | -                | -         |    -1.91 | jeyN, Mad, moz, swaggy, wfn  |
|            3 |     2273 | 2026-03-31 | IDoPieca         | W   | 0.786      | 0.384        | 0.000 (0.000)    | 0.072 (0.022)    | 0 (0.000) |    16.72 | jeyN, Mad, moz, swaggy, wfn  |
|            2 |     2415 | 2026-03-29 | RUSTEC           | L   | 0.773      | -            | -                | -                | -         |    -1.38 | jeyN, Mad, moz, swaggy, wfn  |
|            1 |     3802 | 2026-03-02 | CTRL             | L   | 0.595      | -            | -                | -                | -         |    -6.21 | jeyN, Mad, moz, swaggy, wfn  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
