### Roster Details<br />
Team Name: ex-TALON<br />
Roster: ADDICT, BRACE, Forleks, hazr, sterling<br />
Global Rank: [277](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_01_05.md)<br />
Regional Rank: [39]( ../../standings_asia_2026_01_05.md)<br />
<br />
Final Rank Value:  500.7<br />
<br />
Final Rank Value (500.7) = Starting Rank Value (497.7) + Head To Head Adjustments (3.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.195[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.049<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 497.7
- 400 + ( ( 0.049 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 497.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |     3320 | 2025-09-09 | Mindfreak  | L   | 0.411      | -            | -                | -                | -         |    -1.06 | ADDICT, BRACE, Forleks, hazr, sterling |
|           10 |     3599 | 2025-08-28 | Rooster    | L   | 0.331      | -            | -                | -                | -         |    -2.44 | ADDICT, BRACE, Forleks, hazr, sterling |
|            9 |     3652 | 2025-08-26 | SemperFi   | L   | 0.318      | -            | -                | -                | -         |    -1.65 | ADDICT, BRACE, Forleks, hazr, sterling |
|            8 |     4064 | 2025-08-12 | Rooster    | W   | 0.225      | 0.278        | 0.010 (0.001)    | 0.164 (0.010)    | 0 (0.000) |     5.40 | ADDICT, BRACE, Forleks, hazr, sterling |
|            7 |     4119 | 2025-08-11 | DanCompany | W   | 0.218      | 0.278        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.51 | ADDICT, BRACE, Forleks, hazr, sterling |
|            6 |     4593 | 2025-07-16 | SemperFi   | L   | 0.045      | -            | -                | -                | -         |    -0.23 | ADDICT, BRACE, Forleks, hazr, sterling |
|            5 |     4613 | 2025-07-15 | Rooster    | L   | 0.038      | -            | -                | -                | -         |    -0.28 | ADDICT, BRACE, Forleks, hazr, sterling |
|            4 |     4649 | 2025-07-13 | Mindfreak  | W   | 0.026      | 0.314        | 0.009 (0.000)    | 0.459 (0.004)    | 0 (0.000) |     0.76 | ADDICT, BRACE, Forleks, hazr, sterling |
|            3 |     4668 | 2025-07-12 | GATERON    | L   | 0.020      | -            | -                | -                | -         |    -0.18 | ADDICT, BRACE, Forleks, hazr, sterling |
|            2 |     4674 | 2025-07-12 | NomadS     | L   | 0.018      | -            | -                | -                | -         |    -0.14 | ADDICT, BRACE, Forleks, hazr, sterling |
|            1 |     4706 | 2025-07-11 | Mindfreak  | W   | 0.013      | 0.624        | 0.009 (0.000)    | 0.459 (0.004)    | 0 (0.000) |     0.37 | ADDICT, BRACE, Forleks, hazr, sterling |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
