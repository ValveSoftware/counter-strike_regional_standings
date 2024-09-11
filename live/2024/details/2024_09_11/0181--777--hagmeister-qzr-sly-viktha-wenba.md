### Roster Details<br />
Team Name: 777<br />
Roster: Hagmeister, qzr, SLY, Viktha, Wenba<br />
Global Rank: [181](../../standings_global_2024_09_11.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_11.md)<br />
Regional Rank: [117]( ../../standings_europe_2024_09_11.md)<br />
<br />
Final Rank Value:  625.2<br />
<br />
Final Rank Value (625.2) = Starting Rank Value (667.8) + Head To Head Adjustments (-42.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.332[<sup>1</sup>](#table2)
- Bounty Collected: 0.213[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.138<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 667.8
- 400 + ( ( 0.138 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 667.8


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
|           20 |     1231 | 2024-08-05 | ECSTATIC      | L   | 0.953      | -            | -                | -                | -         |   -11.65 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           19 |     1237 | 2024-08-05 | TSM           | L   | 0.952      | -            | -                | -                | -         |    -3.82 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           18 |     1789 | 2024-07-20 | Heimo         | L   | 0.846      | -            | -                | -                | -         |   -14.23 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           17 |     1802 | 2024-07-19 | INFINITE      | L   | 0.841      | -            | -                | -                | -         |   -16.89 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           16 |     2182 | 2024-07-06 | Revenant      | L   | 0.753      | -            | -                | -                | -         |    -5.43 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           15 |     2265 | 2024-06-16 | CPH Wolves    | L   | 0.619      | -            | -                | -                | -         |    -6.43 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           14 |     2299 | 2024-06-15 | The Prodigies | W   | 0.612      | 0.143        | 0.000 (0.000)    | 0.060 (0.005)    | 0 (0.000) |     6.11 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           13 |     2402 | 2024-06-12 | ADEPTS        | W   | 0.592      | 0.143        | 0.002 (0.000)    | 0.053 (0.005)    | 0 (0.000) |     7.92 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           12 |     2418 | 2024-06-11 | The Prodigies | L   | 0.586      | -            | -                | -                | -         |   -12.59 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           11 |     2868 | 2024-06-01 | VP.Prodigy    | L   | 0.519      | -            | -                | -                | -         |    -4.58 | Affava, Hagmeister, qzr, Viktha, Wenba       |
|           10 |     3001 | 2024-05-26 | Metizport X   | W   | 0.480      | 0.322        | 0.004 (0.001)    | 0.014 (0.002)    | 0 (0.000) |     6.40 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            9 |     3228 | 2024-05-18 | DMS           | L   | 0.426      | -            | -                | -                | -         |    -3.35 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            8 |     3276 | 2024-05-17 | Space         | W   | 0.418      | 0.143        | 0.004 (0.000)    | 0.478 (0.029)    | 0 (0.000) |     9.10 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            7 |     3304 | 2024-05-16 | Rounds        | W   | 0.413      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.30 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            6 |     3343 | 2024-05-15 | GUN5          | L   | 0.407      | -            | -                | -                | -         |    -1.99 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            5 |     3486 | 2024-05-11 | Metizport X   | W   | 0.380      | 0.322        | 0.004 (0.000)    | 0.014 (0.002)    | 0 (0.000) |     5.26 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            4 |     3766 | 2024-04-27 | Sashi         | L   | 0.287      | -            | -                | -                | -         |    -0.80 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            3 |     3777 | 2024-04-27 | Preasy        | W   | 0.286      | 0.336        | 0.006 (0.001)    | 0.155 (0.015)    | 0 (0.000) |     5.19 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            2 |     4143 | 2024-04-13 | Norway        | L   | 0.194      | -            | -                | -                | -         |    -3.23 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            1 |     4751 | 2024-03-17 | INFURITY      | W   | 0.014      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.08 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,895.42)
- Divide that value by the 5th highest value among all rosters ($294,714.87)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-26 |      0.480 | $3,864.00      | $1,854.47       |
| 2024-04-27 |      0.287 | $2,655.00      | $762.83         |
| 2024-04-13 |      0.194 | $1,436.00      | $278.12         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
