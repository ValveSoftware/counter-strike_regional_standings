### Roster Details<br />
Team Name: ex-TALON<br />
Roster: ADDICT, BRACE, Forleks, hazr, sterling<br />
Global Rank: [254](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_12_01.md)<br />
Regional Rank: [38]( ../../standings_asia_2025_12_01.md)<br />
<br />
Final Rank Value:  521.2<br />
<br />
Final Rank Value (521.2) = Starting Rank Value (510.6) + Head To Head Adjustments (10.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.218[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.058<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 510.6
- 400 + ( ( 0.058 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 510.6


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
|           11 |     2760 | 2025-09-09 | Mindfreak  | L   | 0.644      | -            | -                | -                | -         |    -2.96 | ADDICT, BRACE, Forleks, hazr, sterling |
|           10 |     3039 | 2025-08-28 | Rooster    | L   | 0.564      | -            | -                | -                | -         |    -4.36 | ADDICT, BRACE, Forleks, hazr, sterling |
|            9 |     3092 | 2025-08-26 | SemperFi   | L   | 0.551      | -            | -                | -                | -         |    -3.73 | ADDICT, BRACE, Forleks, hazr, sterling |
|            8 |     3504 | 2025-08-12 | Rooster    | W   | 0.458      | 0.278        | 0.011 (0.001)    | 0.231 (0.029)    | 0 (0.000) |    10.76 | ADDICT, BRACE, Forleks, hazr, sterling |
|            7 |     3559 | 2025-08-11 | DanCompany | W   | 0.451      | 0.278        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.83 | ADDICT, BRACE, Forleks, hazr, sterling |
|            6 |     4033 | 2025-07-16 | SemperFi   | L   | 0.278      | -            | -                | -                | -         |    -1.93 | ADDICT, BRACE, Forleks, hazr, sterling |
|            5 |     4053 | 2025-07-15 | Rooster    | L   | 0.271      | -            | -                | -                | -         |    -2.15 | ADDICT, BRACE, Forleks, hazr, sterling |
|            4 |     4089 | 2025-07-13 | Mindfreak  | W   | 0.259      | 0.314        | 0.005 (0.000)    | 0.471 (0.038)    | 0 (0.000) |     7.36 | ADDICT, BRACE, Forleks, hazr, sterling |
|            3 |     4108 | 2025-07-12 | GATERON    | L   | 0.253      | -            | -                | -                | -         |    -2.38 | ADDICT, BRACE, Forleks, hazr, sterling |
|            2 |     4114 | 2025-07-12 | NomadS     | L   | 0.251      | -            | -                | -                | -         |    -1.86 | ADDICT, BRACE, Forleks, hazr, sterling |
|            1 |     4146 | 2025-07-11 | Mindfreak  | W   | 0.246      | 0.624        | 0.005 (0.001)    | 0.471 (0.072)    | 0 (0.000) |     7.03 | ADDICT, BRACE, Forleks, hazr, sterling |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
