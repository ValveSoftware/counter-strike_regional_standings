### Roster Details<br />
Team Name: JiJieHao<br />
Roster: 0SAMAS, Bibu, BOROS, ISSAA, m1N1<br />
Global Rank: [110](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_04_07.md)<br />
Regional Rank: [16]( ../../standings_asia_2025_04_07.md)<br />
<br />
Final Rank Value:  729.8<br />
<br />
Final Rank Value (729.8) = Starting Rank Value (628.6) + Head To Head Adjustments (101.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.251[<sup>2</sup>](#table1)
- Opponent Network: 0.034[<sup>2</sup>](#table1)
- LAN Wins: 0.212[<sup>2</sup>](#table1)

The average of these factors is 0.124<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 628.6
- 400 + ( ( 0.124 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 628.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |       83 | 2025-04-01 | HOTU           | L   | 1.000      | -            | -                | -                | -         |    -9.03 | 0SAMAS, Bibu, BOROS, ISSAA, m1N1    |
|           18 |       93 | 2025-03-31 | SemperFi       | W   | 1.000      | 0.143        | 0.023 (0.003)    | 0.455 (0.065)    | 0 (0.000) |    25.55 | 0SAMAS, Bibu, BOROS, ISSAA, m1N1    |
|           17 |      227 | 2025-03-28 | ScarX          | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.108 (0.015)    | 0 (0.000) |     7.85 | 0SAMAS, Bibu, BOROS, ISSAA, m1N1    |
|           16 |      295 | 2025-03-27 | POWERmix       | W   | 1.000      | 0.143        | 0.001 (0.000)    | 0.104 (0.015)    | 0 (0.000) |    11.32 | 0SAMAS, Bibu, BOROS, ISSAA, m1N1    |
|           15 |      307 | 2025-03-27 | ScarX          | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.108 (0.015)    | 0 (0.000) |     7.45 | 0SAMAS, Bibu, BOROS, ISSAA, m1N1    |
|           14 |      691 | 2025-03-08 | Rare Atom      | L   | 1.000      | -            | -                | -                | -         |    -4.14 | Aaron, Bibu, BOROS, dennyslaw, m1N1 |
|           13 |      707 | 2025-03-07 | DogEvil        | W   | 0.997      | 0.143        | -                | 0.591 (0.084)    | 1 (0.997) |    14.65 | Aaron, Bibu, BOROS, dennyslaw, m1N1 |
|           12 |      760 | 2025-03-07 | HOTU           | L   | 0.992      | -            | -                | -                | -         |   -12.21 | Aaron, Bibu, BOROS, dennyslaw, m1N1 |
|           11 |      771 | 2025-03-06 | SemperFi       | W   | 0.990      | 0.143        | 0.023 (0.003)    | 0.455 (0.064)    | 1 (0.990) |    26.16 | Aaron, Bibu, BOROS, dennyslaw, m1N1 |
|           10 |      971 | 2025-02-26 | POWERmix       | W   | 0.933      | 0.143        | 0.001 (0.000)    | 0.104 (0.014)    | 0 (0.000) |    12.13 | Aaron, Bibu, BOROS, dennyslaw, m1N1 |
|            9 |      989 | 2025-02-25 | POWERmix       | W   | 0.926      | 0.143        | 0.001 (0.000)    | 0.104 (0.014)    | 0 (0.000) |    12.74 | Aaron, Bibu, BOROS, dennyslaw, m1N1 |
|            8 |     1016 | 2025-02-24 | TheShtrongolZ  | W   | 0.919      | -            | -                | -                | 0 (0.000) |     6.07 | Aaron, Bibu, BOROS, dennyslaw, m1N1 |
|            7 |     1342 | 2025-02-09 | DogEvil        | L   | 0.824      | -            | -                | -                | -         |   -13.84 | Aaron, Bibu, dennyslaw, ISSAA, m1N1 |
|            6 |     1369 | 2025-02-09 | Rare Atom      | L   | 0.819      | -            | -                | -                | -         |    -2.78 | Aaron, Bibu, dennyslaw, ISSAA, m1N1 |
|            5 |     1438 | 2025-02-07 | Housebets      | W   | 0.810      | 0.143        | 0.015 (0.002)    | 0.254 (0.029)    | 0 (0.000) |    17.49 | Aaron, Bibu, dennyslaw, ISSAA, m1N1 |
|            4 |     1839 | 2024-12-14 | Betera         | L   | 0.441      | -            | -                | -                | -         |   -11.01 | Aaron, Bibu, dennyslaw, ISSAA, m1N1 |
|            3 |     1869 | 2024-12-13 | Spirit Academy | L   | 0.434      | -            | -                | -                | -         |    -3.28 | Aaron, Bibu, dennyslaw, ISSAA, m1N1 |
|            2 |     1901 | 2024-12-11 | FAVBET         | W   | 0.421      | 0.143        | 0.017 (0.001)    | 0.396 (0.024)    | -         |     8.66 | Aaron, Bibu, dennyslaw, ISSAA, m1N1 |
|            1 |     1911 | 2024-12-10 | Endpoint       | W   | 0.415      | 0.143        | 0.006 (0.000)    | -                | -         |     7.43 | Aaron, Bibu, dennyslaw, ISSAA, m1N1 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
