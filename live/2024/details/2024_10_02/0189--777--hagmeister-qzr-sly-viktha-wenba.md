### Roster Details<br />
Team Name: 777<br />
Roster: Hagmeister, qzr, SLY, Viktha, Wenba<br />
Global Rank: [189](../../standings_global_2024_10_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_02.md)<br />
Regional Rank: [120]( ../../standings_europe_2024_10_02.md)<br />
<br />
Final Rank Value:  613.4<br />
<br />
Final Rank Value (613.4) = Starting Rank Value (642.1) + Head To Head Adjustments (-28.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.306[<sup>1</sup>](#table2)
- Bounty Collected: 0.197[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.127<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 642.1
- 400 + ( ( 0.127 - 0.000 ) / ( 0.836 - 0.000 ) ) * 1600 = 642.1


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
|           19 |     1959 | 2024-08-05 | ECSTATIC      | L   | 0.812      | -            | -                | -                | -         |    -4.20 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           18 |     1965 | 2024-08-05 | TSM           | L   | 0.811      | -            | -                | -                | -         |    -3.50 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           17 |     2517 | 2024-07-20 | Heimo         | L   | 0.705      | -            | -                | -                | -         |   -11.72 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           16 |     2530 | 2024-07-19 | INFINITE      | L   | 0.700      | -            | -                | -                | -         |   -13.85 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           15 |     2910 | 2024-07-06 | Revenant      | L   | 0.612      | -            | -                | -                | -         |    -4.20 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           14 |     2993 | 2024-06-16 | CPH Wolves    | L   | 0.478      | -            | -                | -                | -         |    -3.25 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           13 |     3027 | 2024-06-15 | The Prodigies | W   | 0.472      | 0.143        | 0.000 (0.000)    | 0.041 (0.003)    | 0 (0.000) |     5.01 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           12 |     3130 | 2024-06-12 | ADEPTS        | W   | 0.451      | 0.143        | 0.001 (0.000)    | 0.044 (0.003)    | 0 (0.000) |     6.22 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           11 |     3146 | 2024-06-11 | The Prodigies | L   | 0.446      | -            | -                | -                | -         |    -9.31 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           10 |     3596 | 2024-06-01 | VP.Prodigy    | L   | 0.378      | -            | -                | -                | -         |    -3.60 | Affava, Hagmeister, qzr, Viktha, Wenba       |
|            9 |     3729 | 2024-05-26 | Metizport X   | W   | 0.339      | 0.322        | 0.002 (0.000)    | 0.008 (0.001)    | 0 (0.000) |     4.73 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            8 |     3956 | 2024-05-18 | DMS           | L   | 0.286      | -            | -                | -                | -         |    -2.16 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            7 |     4004 | 2024-05-17 | Space         | W   | 0.277      | 0.143        | 0.003 (0.000)    | 0.467 (0.019)    | 0 (0.000) |     6.02 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            6 |     4032 | 2024-05-16 | Rounds        | W   | 0.272      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.72 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            5 |     4071 | 2024-05-15 | GUN5          | L   | 0.266      | -            | -                | -                | -         |    -1.31 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            4 |     4214 | 2024-05-11 | Metizport X   | W   | 0.239      | 0.322        | 0.002 (0.000)    | 0.008 (0.001)    | 0 (0.000) |     3.42 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            3 |     4494 | 2024-04-27 | Sashi         | L   | 0.147      | -            | -                | -                | -         |    -0.50 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            2 |     4505 | 2024-04-27 | Preasy        | W   | 0.145      | 0.336        | 0.004 (0.000)    | 0.144 (0.007)    | 0 (0.000) |     2.69 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            1 |     4871 | 2024-04-13 | Norway        | L   | 0.053      | -            | -                | -                | -         |    -0.91 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,775.70)
- Divide that value by the 5th highest value among all rosters ($328,015.08)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-26 |      0.339 | $3,864.00      | $1,310.58       |
| 2024-04-27 |      0.147 | $2,655.00      | $389.12         |
| 2024-04-13 |      0.053 | $1,436.00      | $76.00          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
