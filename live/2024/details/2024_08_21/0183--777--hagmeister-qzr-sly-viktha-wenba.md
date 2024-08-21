### Roster Details<br />
Team Name: 777<br />
Roster: Hagmeister, qzr, SLY, Viktha, Wenba<br />
Global Rank: [183](../../standings_global_2024_08_21.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_21.md)<br />
Regional Rank: [116]( ../../standings_europe_2024_08_21.md)<br />
<br />
Final Rank Value:  633.6<br />
<br />
Final Rank Value (633.6) = Starting Rank Value (686.9) + Head To Head Adjustments (-53.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.346[<sup>1</sup>](#table2)
- Bounty Collected: 0.224[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.145<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 686.9
- 400 + ( ( 0.145 - 0.000 ) / ( 0.806 - 0.000 ) ) * 1600 = 686.9


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
|           20 |      530 | 2024-08-05 | ECSTATIC      | L   | 1.000      | -            | -                | -                | -         |   -16.00 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           19 |      536 | 2024-08-05 | TSM           | L   | 1.000      | -            | -                | -                | -         |    -4.08 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           18 |     1088 | 2024-07-20 | Heimo         | L   | 0.985      | -            | -                | -                | -         |   -16.48 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           17 |     1101 | 2024-07-19 | INFINITE      | L   | 0.980      | -            | -                | -                | -         |   -19.62 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           16 |     1481 | 2024-07-06 | Revenant      | L   | 0.892      | -            | -                | -                | -         |    -7.43 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           15 |     1564 | 2024-06-16 | CPH Wolves    | L   | 0.758      | -            | -                | -                | -         |    -9.10 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           14 |     1598 | 2024-06-15 | The Prodigies | W   | 0.752      | 0.143        | 0.000 (0.000)    | 0.074 (0.008)    | 0 (0.000) |     7.36 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           13 |     1701 | 2024-06-12 | ADEPTS        | W   | 0.731      | 0.143        | 0.002 (0.000)    | 0.021 (0.002)    | 0 (0.000) |     9.70 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           12 |     1717 | 2024-06-11 | The Prodigies | L   | 0.725      | -            | -                | -                | -         |   -15.63 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           11 |     2167 | 2024-06-01 | VP.Prodigy    | L   | 0.658      | -            | -                | -                | -         |    -5.65 | Affava, Hagmeister, qzr, Viktha, Wenba       |
|           10 |     2300 | 2024-05-26 | Metizport X   | W   | 0.619      | 0.322        | 0.005 (0.001)    | 0.019 (0.004)    | 0 (0.000) |     7.97 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            9 |     2527 | 2024-05-18 | DMS           | L   | 0.566      | -            | -                | -                | -         |    -4.28 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            8 |     2575 | 2024-05-17 | Space         | W   | 0.557      | 0.143        | 0.005 (0.000)    | 0.409 (0.033)    | 0 (0.000) |    11.55 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            7 |     2603 | 2024-05-16 | Rounds        | W   | 0.552      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.79 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            6 |     2642 | 2024-05-15 | GUN5          | L   | 0.546      | -            | -                | -                | -         |    -3.73 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            5 |     2785 | 2024-05-11 | Metizport X   | W   | 0.519      | 0.322        | 0.005 (0.001)    | 0.019 (0.003)    | 0 (0.000) |     6.98 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            4 |     3065 | 2024-04-27 | Sashi         | L   | 0.426      | -            | -                | -                | -         |    -0.98 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            3 |     3076 | 2024-04-27 | Preasy        | W   | 0.425      | 0.336        | 0.008 (0.001)    | 0.186 (0.027)    | 0 (0.000) |     7.92 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            2 |     3442 | 2024-04-13 | Norway        | L   | 0.333      | -            | -                | -                | -         |    -5.38 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            1 |     4050 | 2024-03-17 | INFURITY      | W   | 0.153      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.81 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,001.78)
- Divide that value by the 5th highest value among all rosters ($307,820.64)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-26 |      0.619 | $3,864.00      | $2,391.86       |
| 2024-04-27 |      0.426 | $2,655.00      | $1,132.08       |
| 2024-04-13 |      0.333 | $1,436.00      | $477.84         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
