### Roster Details<br />
Team Name: 777<br />
Roster: Hagmeister, qzr, SLY, Viktha, Wenba<br />
Global Rank: [199](../../standings_global_2024_10_30.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_30.md)<br />
Regional Rank: [121]( ../../standings_europe_2024_10_30.md)<br />
<br />
Final Rank Value:  611.5<br />
<br />
Final Rank Value (611.5) = Starting Rank Value (631.3) + Head To Head Adjustments (-19.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.277[<sup>1</sup>](#table2)
- Bounty Collected: 0.189[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.117<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 631.3
- 400 + ( ( 0.117 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 631.3


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
|           16 |     2584 | 2024-08-05 | ECSTATIC      | L   | 0.626      | -            | -                | -                | -         |    -2.59 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           15 |     2590 | 2024-08-05 | TSM           | L   | 0.625      | -            | -                | -                | -         |    -2.35 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           14 |     3142 | 2024-07-20 | Heimo         | L   | 0.519      | -            | -                | -                | -         |    -7.42 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           13 |     3155 | 2024-07-19 | INFINITE      | L   | 0.514      | -            | -                | -                | -         |   -10.01 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           12 |     3535 | 2024-07-06 | Revenant      | L   | 0.426      | -            | -                | -                | -         |    -2.74 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           11 |     3618 | 2024-06-16 | CPH Wolves    | L   | 0.292      | -            | -                | -                | -         |    -2.47 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           10 |     3652 | 2024-06-15 | The Prodigies | W   | 0.286      | 0.143        | 0.009 (0.000)    | 0.022 (0.001)    | 0 (0.000) |     5.07 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|            9 |     3755 | 2024-06-12 | ADEPTS        | W   | 0.266      | 0.143        | 0.000 (0.000)    | 0.033 (0.001)    | 0 (0.000) |     3.65 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|            8 |     3771 | 2024-06-11 | The Prodigies | L   | 0.260      | -            | -                | -                | -         |    -3.53 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|            7 |     4221 | 2024-06-01 | VP.Prodigy    | L   | 0.192      | -            | -                | -                | -         |    -2.00 | Affava, Hagmeister, qzr, Viktha, Wenba       |
|            6 |     4354 | 2024-05-26 | Metizport X   | W   | 0.153      | 0.322        | 0.001 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     2.19 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            5 |     4581 | 2024-05-18 | DMS           | L   | 0.100      | -            | -                | -                | -         |    -0.70 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            4 |     4629 | 2024-05-17 | SovvyKiNG     | W   | 0.091      | 0.143        | 0.002 (0.000)    | 0.412 (0.005)    | 0 (0.000) |     2.05 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            3 |     4657 | 2024-05-16 | Rounds        | W   | 0.086      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.58 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            2 |     4696 | 2024-05-15 | GUN5          | L   | 0.080      | -            | -                | -                | -         |    -0.28 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            1 |     4839 | 2024-05-11 | Metizport X   | W   | 0.053      | 0.322        | 0.001 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     0.77 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($592.08)
- Divide that value by the 5th highest value among all rosters ($242,848.56)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
