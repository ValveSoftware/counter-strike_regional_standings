### Roster Details<br />
Team Name: 777<br />
Roster: Hagmeister, qzr, SLY, Viktha, Wenba<br />
Global Rank: [180](../../standings_global_2024_09_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_04.md)<br />
Regional Rank: [116]( ../../standings_europe_2024_09_04.md)<br />
<br />
Final Rank Value:  630.6<br />
<br />
Final Rank Value (630.6) = Starting Rank Value (676.0) + Head To Head Adjustments (-45.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.335[<sup>1</sup>](#table2)
- Bounty Collected: 0.216[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.139<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 676.0
- 400 + ( ( 0.139 - 0.000 ) / ( 0.808 - 0.000 ) ) * 1600 = 676.0


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
|           20 |     1026 | 2024-08-05 | ECSTATIC      | L   | 0.999      | -            | -                | -                | -         |   -12.85 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           19 |     1032 | 2024-08-05 | TSM           | L   | 0.999      | -            | -                | -                | -         |    -3.97 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           18 |     1584 | 2024-07-20 | Heimo         | L   | 0.893      | -            | -                | -                | -         |   -15.03 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           17 |     1597 | 2024-07-19 | INFINITE      | L   | 0.888      | -            | -                | -                | -         |   -17.84 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           16 |     1977 | 2024-07-06 | Revenant      | L   | 0.800      | -            | -                | -                | -         |    -5.79 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           15 |     2060 | 2024-06-16 | CPH Wolves    | L   | 0.666      | -            | -                | -                | -         |    -7.54 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           14 |     2094 | 2024-06-15 | The Prodigies | W   | 0.659      | 0.143        | 0.000 (0.000)    | 0.066 (0.006)    | 0 (0.000) |     6.49 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           13 |     2197 | 2024-06-12 | ADEPTS        | W   | 0.639      | 0.143        | 0.002 (0.000)    | 0.018 (0.002)    | 0 (0.000) |     8.50 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           12 |     2213 | 2024-06-11 | The Prodigies | L   | 0.633      | -            | -                | -                | -         |   -13.67 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           11 |     2663 | 2024-06-01 | VP.Prodigy    | L   | 0.565      | -            | -                | -                | -         |    -4.89 | Affava, Hagmeister, qzr, Viktha, Wenba       |
|           10 |     2796 | 2024-05-26 | Metizport X   | W   | 0.527      | 0.322        | 0.004 (0.001)    | 0.016 (0.003)    | 0 (0.000) |     6.93 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            9 |     3023 | 2024-05-18 | DMS           | L   | 0.473      | -            | -                | -                | -         |    -3.58 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            8 |     3071 | 2024-05-17 | Space         | W   | 0.465      | 0.143        | 0.004 (0.000)    | 0.458 (0.030)    | 0 (0.000) |    10.24 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            7 |     3099 | 2024-05-16 | Rounds        | W   | 0.459      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.46 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            6 |     3138 | 2024-05-15 | GUN5          | L   | 0.454      | -            | -                | -                | -         |    -2.30 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            5 |     3281 | 2024-05-11 | Metizport X   | W   | 0.427      | 0.322        | 0.004 (0.001)    | 0.016 (0.002)    | 0 (0.000) |     5.85 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            4 |     3561 | 2024-04-27 | Sashi         | L   | 0.334      | -            | -                | -                | -         |    -0.84 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            3 |     3572 | 2024-04-27 | Preasy        | W   | 0.333      | 0.336        | 0.007 (0.001)    | 0.170 (0.019)    | 0 (0.000) |     6.11 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            2 |     3938 | 2024-04-13 | Norway        | L   | 0.241      | -            | -                | -                | -         |    -3.97 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            1 |     4546 | 2024-03-17 | INFURITY      | W   | 0.061      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.34 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,268.49)
- Divide that value by the 5th highest value among all rosters ($315,326.30)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-26 |      0.527 | $3,864.00      | $2,035.68       |
| 2024-04-27 |      0.334 | $2,655.00      | $887.34         |
| 2024-04-13 |      0.241 | $1,436.00      | $345.47         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
