### Roster Details<br />
Team Name: 777<br />
Roster: Hagmeister, qzr, SLY, Viktha, Wenba<br />
Global Rank: [198](../../standings_global_2024_10_23.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_23.md)<br />
Regional Rank: [120]( ../../standings_europe_2024_10_23.md)<br />
<br />
Final Rank Value:  612.3<br />
<br />
Final Rank Value (612.3) = Starting Rank Value (633.2) + Head To Head Adjustments (-21.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.283[<sup>1</sup>](#table2)
- Bounty Collected: 0.192[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.119<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 633.2
- 400 + ( ( 0.119 - 0.000 ) / ( 0.816 - 0.000 ) ) * 1600 = 633.2


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
|           18 |     2454 | 2024-08-05 | ECSTATIC      | L   | 0.672      | -            | -                | -                | -         |    -2.93 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           17 |     2460 | 2024-08-05 | TSM           | L   | 0.671      | -            | -                | -                | -         |    -2.61 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           16 |     3012 | 2024-07-20 | Heimo         | L   | 0.565      | -            | -                | -                | -         |    -8.36 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           15 |     3025 | 2024-07-19 | INFINITE      | L   | 0.560      | -            | -                | -                | -         |   -11.08 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           14 |     3405 | 2024-07-06 | Revenant      | L   | 0.472      | -            | -                | -                | -         |    -3.11 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           13 |     3488 | 2024-06-16 | CPH Wolves    | L   | 0.338      | -            | -                | -                | -         |    -2.94 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           12 |     3522 | 2024-06-15 | The Prodigies | W   | 0.332      | 0.143        | 0.008 (0.000)    | 0.027 (0.001)    | 0 (0.000) |     5.71 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           11 |     3625 | 2024-06-12 | ADEPTS        | W   | 0.312      | 0.143        | 0.001 (0.000)    | 0.037 (0.002)    | 0 (0.000) |     4.30 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           10 |     3641 | 2024-06-11 | The Prodigies | L   | 0.306      | -            | -                | -                | -         |    -4.31 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|            9 |     4091 | 2024-06-01 | VP.Prodigy    | L   | 0.238      | -            | -                | -                | -         |    -2.41 | Affava, Hagmeister, qzr, Viktha, Wenba       |
|            8 |     4224 | 2024-05-26 | Metizport X   | W   | 0.199      | 0.322        | 0.002 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     2.85 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            7 |     4451 | 2024-05-18 | DMS           | L   | 0.146      | -            | -                | -                | -         |    -1.02 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            6 |     4499 | 2024-05-17 | Space         | W   | 0.137      | 0.143        | 0.002 (0.000)    | 0.414 (0.008)    | 0 (0.000) |     3.02 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            5 |     4527 | 2024-05-16 | Rounds        | W   | 0.132      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.88 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            4 |     4566 | 2024-05-15 | GUN5          | L   | 0.126      | -            | -                | -                | -         |    -0.47 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            3 |     4709 | 2024-05-11 | Metizport X   | W   | 0.099      | 0.322        | 0.002 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     1.44 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            2 |     4989 | 2024-04-27 | Sashi         | L   | 0.007      | -            | -                | -                | -         |    -0.02 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            1 |     5000 | 2024-04-27 | Preasy        | W   | 0.005      | 0.336        | 0.003 (0.000)    | 0.147 (0.000)    | 0 (0.000) |     0.10 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($787.56)
- Divide that value by the 5th highest value among all rosters ($270,964.47)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-26 |      0.199 | $3,864.00      | $769.93         |
| 2024-04-27 |      0.007 | $2,655.00      | $17.63          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
