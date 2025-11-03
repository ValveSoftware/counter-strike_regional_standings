### Roster Details<br />
Team Name: ex-TALON<br />
Roster: ADDICT, BRACE, Forleks, hazr, sterling<br />
Global Rank: [234](../../standings_global_2025_11_03.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_11_03.md)<br />
Regional Rank: [29]( ../../standings_asia_2025_11_03.md)<br />
<br />
Final Rank Value:  514.3<br />
<br />
Final Rank Value (514.3) = Starting Rank Value (511.2) + Head To Head Adjustments (3.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.220[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.059<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 511.2
- 400 + ( ( 0.059 - 0.000 ) / ( 0.853 - 0.000 ) ) * 1600 = 511.2


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
|           11 |     1739 | 2025-09-09 | Mindfreak  | L   | 0.831      | -            | -                | -                | -         |   -11.22 | ADDICT, BRACE, Forleks, hazr, sterling |
|           10 |     2018 | 2025-08-28 | Rooster    | L   | 0.751      | -            | -                | -                | -         |    -6.07 | ADDICT, BRACE, Forleks, hazr, sterling |
|            9 |     2071 | 2025-08-26 | SemperFi   | L   | 0.738      | -            | -                | -                | -         |    -5.20 | ADDICT, BRACE, Forleks, hazr, sterling |
|            8 |     2483 | 2025-08-12 | Rooster    | W   | 0.645      | 0.278        | 0.013 (0.002)    | 0.305 (0.055)    | 0 (0.000) |    14.98 | ADDICT, BRACE, Forleks, hazr, sterling |
|            7 |     2538 | 2025-08-11 | DanCompany | W   | 0.638      | 0.278        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.81 | ADDICT, BRACE, Forleks, hazr, sterling |
|            6 |     3012 | 2025-07-16 | SemperFi   | L   | 0.464      | -            | -                | -                | -         |    -3.33 | ADDICT, BRACE, Forleks, hazr, sterling |
|            5 |     3032 | 2025-07-15 | Rooster    | L   | 0.457      | -            | -                | -                | -         |    -3.69 | ADDICT, BRACE, Forleks, hazr, sterling |
|            4 |     3068 | 2025-07-13 | Mindfreak  | W   | 0.445      | 0.314        | 0.001 (0.000)    | 0.294 (0.041)    | 0 (0.000) |     8.80 | ADDICT, BRACE, Forleks, hazr, sterling |
|            3 |     3087 | 2025-07-12 | NSN        | L   | 0.439      | -            | -                | -                | -         |    -3.81 | ADDICT, BRACE, Forleks, hazr, sterling |
|            2 |     3093 | 2025-07-12 | NomadS     | L   | 0.438      | -            | -                | -                | -         |    -2.93 | ADDICT, BRACE, Forleks, hazr, sterling |
|            1 |     3125 | 2025-07-11 | Mindfreak  | W   | 0.432      | 0.624        | 0.001 (0.000)    | 0.294 (0.079)    | 0 (0.000) |     8.73 | ADDICT, BRACE, Forleks, hazr, sterling |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($619,318.60)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
