### Roster Details<br />
Team Name: 777<br />
Roster: Hagmeister, qzr, SLY, Viktha, Wenba<br />
Global Rank: [191](../../standings_global_2024_10_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_15.md)<br />
Regional Rank: [120]( ../../standings_europe_2024_10_15.md)<br />
<br />
Final Rank Value:  615.6<br />
<br />
Final Rank Value (615.6) = Starting Rank Value (637.9) + Head To Head Adjustments (-22.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.291[<sup>1</sup>](#table2)
- Bounty Collected: 0.197[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.122<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 637.9
- 400 + ( ( 0.122 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 637.9


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
|           18 |     2276 | 2024-08-05 | ECSTATIC      | L   | 0.727      | -            | -                | -                | -         |    -3.39 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           17 |     2282 | 2024-08-05 | TSM           | L   | 0.726      | -            | -                | -                | -         |    -3.08 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           16 |     2834 | 2024-07-20 | Heimo         | L   | 0.620      | -            | -                | -                | -         |    -9.77 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           15 |     2847 | 2024-07-19 | INFINITE      | L   | 0.615      | -            | -                | -                | -         |   -12.23 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           14 |     3227 | 2024-07-06 | Revenant      | L   | 0.527      | -            | -                | -                | -         |    -3.60 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           13 |     3310 | 2024-06-16 | CPH Wolves    | L   | 0.393      | -            | -                | -                | -         |    -3.52 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           12 |     3344 | 2024-06-15 | The Prodigies | W   | 0.387      | 0.143        | 0.007 (0.000)    | 0.032 (0.002)    | 0 (0.000) |     6.51 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           11 |     3447 | 2024-06-12 | ADEPTS        | W   | 0.366      | 0.143        | 0.001 (0.000)    | 0.040 (0.002)    | 0 (0.000) |     5.02 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           10 |     3463 | 2024-06-11 | The Prodigies | L   | 0.360      | -            | -                | -                | -         |    -5.19 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|            9 |     3913 | 2024-06-01 | VP.Prodigy    | L   | 0.293      | -            | -                | -                | -         |    -2.92 | Affava, Hagmeister, qzr, Viktha, Wenba       |
|            8 |     4046 | 2024-05-26 | Metizport X   | W   | 0.254      | 0.322        | 0.002 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     3.58 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            7 |     4273 | 2024-05-18 | DMS           | L   | 0.201      | -            | -                | -                | -         |    -1.55 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            6 |     4321 | 2024-05-17 | Space         | W   | 0.192      | 0.143        | 0.002 (0.000)    | 0.439 (0.012)    | 0 (0.000) |     4.19 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            5 |     4349 | 2024-05-16 | Rounds        | W   | 0.187      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.21 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            4 |     4388 | 2024-05-15 | GUN5          | L   | 0.181      | -            | -                | -                | -         |    -0.71 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            3 |     4531 | 2024-05-11 | Metizport X   | W   | 0.154      | 0.322        | 0.002 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     2.21 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            2 |     4811 | 2024-04-27 | Sashi         | L   | 0.061      | -            | -                | -                | -         |    -0.23 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            1 |     4822 | 2024-04-27 | Preasy        | W   | 0.060      | 0.336        | 0.004 (0.000)    | 0.121 (0.002)    | 0 (0.000) |     1.13 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,144.44)
- Divide that value by the 5th highest value among all rosters ($308,815.62)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-26 |      0.254 | $3,864.00      | $981.46         |
| 2024-04-27 |      0.061 | $2,655.00      | $162.98         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
