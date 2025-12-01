### Roster Details<br />
Team Name: Anonymo<br />
Roster: AdrieN, chudy, darchevile, Melavi, Nami<br />
Global Rank: [235](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_12_01.md)<br />
Regional Rank: [138]( ../../standings_europe_2025_12_01.md)<br />
<br />
Final Rank Value:  561.8<br />
<br />
Final Rank Value (561.8) = Starting Rank Value (521.6) + Head To Head Adjustments (40.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.210[<sup>2</sup>](#table1)
- Opponent Network: 0.045[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.064<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 521.6
- 400 + ( ( 0.064 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 521.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |     1927 | 2025-09-30 | Partizan         | L   | 0.787      | -            | -                | -                | -         |    -1.29 | AdrieN, chudy, darchevile, maaryy, Nami |
|           10 |     2163 | 2025-09-25 | Nexus            | W   | 0.754      | 0.435        | 0.003 (0.001)    | 0.840 (0.275)    | 0 (0.000) |    22.61 | AdrieN, chudy, darchevile, Melavi, Nami |
|            9 |     2252 | 2025-09-22 | Alliance         | L   | 0.731      | -            | -                | -                | -         |    -0.29 | AdrieN, chudy, darchevile, Melavi, Nami |
|            8 |     2451 | 2025-09-15 | AMKAL            | W   | 0.686      | 0.384        | 0.002 (0.001)    | 0.559 (0.147)    | 0 (0.000) |    19.26 | AdrieN, chudy, darchevile, Melavi, Nami |
|            7 |     2544 | 2025-09-13 | SENZA            | W   | 0.673      | 0.384        | 0.001 (0.000)    | 0.117 (0.030)    | 0 (0.000) |    16.32 | AdrieN, chudy, darchevile, Melavi, Nami |
|            6 |     2587 | 2025-09-12 | Wildcard Academy | L   | 0.666      | -            | -                | -                | -         |   -10.28 | chudy, darchevile, Melavi, Nami, yvro   |
|            5 |     3914 | 2025-07-20 | xdasdf           | L   | 0.306      | -            | -                | -                | -         |    -6.38 | AdrieN, chudy, hfah, Nami, yvro         |
|            4 |     4215 | 2025-07-08 | NOVAQ            | L   | 0.226      | -            | -                | -                | -         |    -0.64 | AdrieN, chudy, darchevile, Melavi, Nami |
|            3 |     4238 | 2025-07-05 | Fisher College   | W   | 0.206      | 0.486        | 0.000 (0.000)    | 0.013 (0.001)    | 0 (0.000) |     3.07 | AdrieN, chudy, darchevile, Melavi, Nami |
|            2 |     4245 | 2025-07-04 | Dziuseppe        | L   | 0.199      | -            | -                | -                | -         |    -1.16 | AdrieN, chudy, darchevile, Melavi, Nami |
|            1 |     4266 | 2025-07-01 | KHAN             | L   | 0.179      | -            | -                | -                | -         |    -1.04 | AdrieN, chudy, darchevile, Melavi, Nami |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
