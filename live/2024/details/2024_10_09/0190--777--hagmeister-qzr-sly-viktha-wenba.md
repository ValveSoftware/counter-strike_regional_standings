### Roster Details<br />
Team Name: 777<br />
Roster: Hagmeister, qzr, SLY, Viktha, Wenba<br />
Global Rank: [190](../../standings_global_2024_10_09.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_09.md)<br />
Regional Rank: [121]( ../../standings_europe_2024_10_09.md)<br />
<br />
Final Rank Value:  621.1<br />
<br />
Final Rank Value (621.1) = Starting Rank Value (643.3) + Head To Head Adjustments (-22.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.300[<sup>1</sup>](#table2)
- Bounty Collected: 0.201[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.126<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 643.3
- 400 + ( ( 0.126 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 643.3


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
|           19 |     2179 | 2024-08-05 | ECSTATIC      | L   | 0.766      | -            | -                | -                | -         |    -3.63 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           18 |     2185 | 2024-08-05 | TSM           | L   | 0.766      | -            | -                | -                | -         |    -3.22 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           17 |     2737 | 2024-07-20 | Heimo         | L   | 0.660      | -            | -                | -                | -         |   -10.45 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           16 |     2750 | 2024-07-19 | INFINITE      | L   | 0.655      | -            | -                | -                | -         |   -13.22 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           15 |     3130 | 2024-07-06 | Revenant      | L   | 0.566      | -            | -                | -                | -         |    -3.95 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           14 |     3213 | 2024-06-16 | CPH Wolves    | L   | 0.433      | -            | -                | -                | -         |    -2.95 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           13 |     3247 | 2024-06-15 | The Prodigies | W   | 0.426      | 0.143        | 0.007 (0.000)    | 0.035 (0.002)    | 0 (0.000) |     7.10 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           12 |     3350 | 2024-06-12 | ADEPTS        | W   | 0.406      | 0.143        | 0.001 (0.000)    | 0.041 (0.002)    | 0 (0.000) |     5.51 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           11 |     3366 | 2024-06-11 | The Prodigies | L   | 0.400      | -            | -                | -                | -         |    -5.82 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           10 |     3816 | 2024-06-01 | VP.Prodigy    | L   | 0.332      | -            | -                | -                | -         |    -3.28 | Affava, Hagmeister, qzr, Viktha, Wenba       |
|            9 |     3949 | 2024-05-26 | Metizport X   | W   | 0.294      | 0.322        | 0.002 (0.000)    | 0.007 (0.001)    | 0 (0.000) |     4.09 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            8 |     4176 | 2024-05-18 | DMS           | L   | 0.240      | -            | -                | -                | -         |    -1.88 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            7 |     4224 | 2024-05-17 | Space         | W   | 0.232      | 0.143        | 0.003 (0.000)    | 0.425 (0.014)    | 0 (0.000) |     4.95 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            6 |     4252 | 2024-05-16 | Rounds        | W   | 0.226      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.43 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            5 |     4291 | 2024-05-15 | GUN5          | L   | 0.221      | -            | -                | -                | -         |    -0.96 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            4 |     4434 | 2024-05-11 | Metizport X   | W   | 0.194      | 0.322        | 0.002 (0.000)    | 0.007 (0.000)    | 0 (0.000) |     2.76 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            3 |     4714 | 2024-04-27 | Sashi         | L   | 0.101      | -            | -                | -                | -         |    -0.36 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            2 |     4725 | 2024-04-27 | Preasy        | W   | 0.100      | 0.336        | 0.004 (0.000)    | 0.128 (0.004)    | 0 (0.000) |     1.87 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            1 |     5091 | 2024-04-13 | Norway        | L   | 0.007      | -            | -                | -                | -         |    -0.13 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,413.30)
- Divide that value by the 5th highest value among all rosters ($304,769.86)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-26 |      0.294 | $3,864.00      | $1,134.56       |
| 2024-04-27 |      0.101 | $2,655.00      | $268.17         |
| 2024-04-13 |      0.007 | $1,436.00      | $10.58          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
