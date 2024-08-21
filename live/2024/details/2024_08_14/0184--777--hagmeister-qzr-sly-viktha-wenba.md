### Roster Details<br />
Team Name: 777<br />
Roster: Hagmeister, qzr, SLY, Viktha, Wenba<br />
Global Rank: [184](../../standings_global_2024_08_14.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_14.md)<br />
Regional Rank: [115]( ../../standings_europe_2024_08_14.md)<br />
<br />
Final Rank Value:  630.9<br />
<br />
Final Rank Value (630.9) = Starting Rank Value (688.5) + Head To Head Adjustments (-57.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.349[<sup>1</sup>](#table2)
- Bounty Collected: 0.226[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.146<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 688.5
- 400 + ( ( 0.146 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 688.5


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
|           20 |      303 | 2024-08-05 | ECSTATIC      | L   | 1.000      | -            | -                | -                | -         |   -19.06 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           19 |      309 | 2024-08-05 | TSM           | L   | 1.000      | -            | -                | -                | -         |    -4.04 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           18 |      861 | 2024-07-20 | Heimo         | L   | 1.000      | -            | -                | -                | -         |   -16.75 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           17 |      874 | 2024-07-19 | INFINITE      | L   | 1.000      | -            | -                | -                | -         |   -19.96 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           16 |     1254 | 2024-07-06 | Revenant      | L   | 0.939      | -            | -                | -                | -         |    -8.66 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           15 |     1337 | 2024-06-16 | CPH Wolves    | L   | 0.805      | -            | -                | -                | -         |    -9.69 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           14 |     1371 | 2024-06-15 | The Prodigies | W   | 0.798      | 0.143        | 0.000 (0.000)    | 0.083 (0.010)    | 0 (0.000) |     7.82 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           13 |     1474 | 2024-06-12 | ADEPTS        | W   | 0.778      | 0.143        | 0.002 (0.000)    | 0.024 (0.003)    | 0 (0.000) |    10.22 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           12 |     1490 | 2024-06-11 | The Prodigies | L   | 0.772      | -            | -                | -                | -         |   -16.55 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           11 |     1940 | 2024-06-01 | VP.Prodigy    | L   | 0.704      | -            | -                | -                | -         |    -6.08 | Affava, Hagmeister, qzr, Viktha, Wenba       |
|           10 |     2073 | 2024-05-26 | Metizport X   | W   | 0.666      | 0.322        | 0.005 (0.001)    | 0.022 (0.005)    | 0 (0.000) |     8.48 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            9 |     2300 | 2024-05-18 | DMS           | L   | 0.612      | -            | -                | -                | -         |    -4.79 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            8 |     2348 | 2024-05-17 | Space         | W   | 0.604      | 0.143        | 0.005 (0.000)    | 0.445 (0.038)    | 0 (0.000) |    12.52 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            7 |     2376 | 2024-05-16 | Rounds        | W   | 0.598      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.99 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            6 |     2415 | 2024-05-15 | GUN5          | L   | 0.593      | -            | -                | -                | -         |    -4.19 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            5 |     2558 | 2024-05-11 | Metizport X   | W   | 0.566      | 0.322        | 0.005 (0.001)    | 0.022 (0.004)    | 0 (0.000) |     7.55 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            4 |     2838 | 2024-04-27 | Sashi         | L   | 0.473      | -            | -                | -                | -         |    -1.15 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            3 |     2849 | 2024-04-27 | Preasy        | W   | 0.472      | 0.336        | 0.008 (0.001)    | 0.208 (0.033)    | 0 (0.000) |     8.83 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            2 |     3215 | 2024-04-13 | Norway        | L   | 0.379      | -            | -                | -                | -         |    -6.09 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            1 |     3823 | 2024-03-17 | INFURITY      | W   | 0.200      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.04 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,373.59)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-26 |      0.666 | $3,864.00      | $2,572.46       |
| 2024-04-27 |      0.473 | $2,655.00      | $1,256.17       |
| 2024-04-13 |      0.379 | $1,436.00      | $544.95         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
