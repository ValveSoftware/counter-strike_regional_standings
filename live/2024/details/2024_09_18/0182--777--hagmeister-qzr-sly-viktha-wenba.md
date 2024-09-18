### Roster Details<br />
Team Name: 777<br />
Roster: Hagmeister, qzr, SLY, Viktha, Wenba<br />
Global Rank: [182](../../standings_global_2024_09_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_18.md)<br />
Regional Rank: [116]( ../../standings_europe_2024_09_18.md)<br />
<br />
Final Rank Value:  633.3<br />
<br />
Final Rank Value (633.3) = Starting Rank Value (666.6) + Head To Head Adjustments (-33.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.329[<sup>1</sup>](#table2)
- Bounty Collected: 0.210[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.136<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 666.6
- 400 + ( ( 0.136 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 666.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |     1436 | 2024-08-05 | ECSTATIC      | L   | 0.907      | -            | -                | -                | -         |    -5.80 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           18 |     1442 | 2024-08-05 | TSM           | L   | 0.906      | -            | -                | -                | -         |    -3.50 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           17 |     1994 | 2024-07-20 | Heimo         | L   | 0.800      | -            | -                | -                | -         |   -13.43 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           16 |     2007 | 2024-07-19 | INFINITE      | L   | 0.795      | -            | -                | -                | -         |   -16.03 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           15 |     2387 | 2024-07-06 | Revenant      | L   | 0.707      | -            | -                | -                | -         |    -4.52 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           14 |     2470 | 2024-06-16 | CPH Wolves    | L   | 0.573      | -            | -                | -                | -         |    -4.80 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           13 |     2504 | 2024-06-15 | The Prodigies | W   | 0.567      | 0.143        | 0.000 (0.000)    | 0.056 (0.005)    | 0 (0.000) |     5.73 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           12 |     2607 | 2024-06-12 | ADEPTS        | W   | 0.546      | 0.143        | 0.001 (0.000)    | 0.052 (0.004)    | 0 (0.000) |     7.33 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           11 |     2623 | 2024-06-11 | The Prodigies | L   | 0.540      | -            | -                | -                | -         |   -11.55 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           10 |     3073 | 2024-06-01 | VP.Prodigy    | L   | 0.473      | -            | -                | -                | -         |    -4.14 | Affava, Hagmeister, qzr, Viktha, Wenba       |
|            9 |     3206 | 2024-05-26 | Metizport X   | W   | 0.434      | 0.322        | 0.004 (0.001)    | 0.013 (0.002)    | 0 (0.000) |     5.84 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            8 |     3433 | 2024-05-18 | DMS           | L   | 0.380      | -            | -                | -                | -         |    -2.92 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            7 |     3481 | 2024-05-17 | Space         | W   | 0.372      | 0.143        | 0.004 (0.000)    | 0.497 (0.026)    | 0 (0.000) |     8.10 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            6 |     3509 | 2024-05-16 | Rounds        | W   | 0.367      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.06 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            5 |     3548 | 2024-05-15 | GUN5          | L   | 0.361      | -            | -                | -                | -         |    -1.61 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            4 |     3691 | 2024-05-11 | Metizport X   | W   | 0.334      | 0.322        | 0.004 (0.000)    | 0.013 (0.001)    | 0 (0.000) |     4.65 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            3 |     3971 | 2024-04-27 | Sashi         | L   | 0.241      | -            | -                | -                | -         |    -0.61 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            2 |     3982 | 2024-04-27 | Preasy        | W   | 0.240      | 0.336        | 0.006 (0.001)    | 0.145 (0.012)    | 0 (0.000) |     4.36 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            1 |     4348 | 2024-04-13 | Norway        | L   | 0.148      | -            | -                | -                | -         |    -2.49 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,529.75)
- Divide that value by the 5th highest value among all rosters ($274,303.95)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-26 |      0.434 | $3,864.00      | $1,676.85       |
| 2024-04-27 |      0.241 | $2,655.00      | $640.79         |
| 2024-04-13 |      0.148 | $1,436.00      | $212.11         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
