### Roster Details<br />
Team Name: SINNERS Academy<br />
Roster: BORO, DALIEN, dreez, outex, Pepo<br />
Global Rank: [142](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_03.md)<br />
Regional Rank: [95]( ../../standings_europe_2025_03_03.md)<br />
<br />
Final Rank Value:  701.8<br />
<br />
Final Rank Value (701.8) = Starting Rank Value (715.7) + Head To Head Adjustments (-13.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.251[<sup>1</sup>](#table2)
- Bounty Collected: 0.276[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.112[<sup>2</sup>](#table1)

The average of these factors is 0.164<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 715.7
- 400 + ( ( 0.164 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 715.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1358 | 2024-11-22 | BRUTE          | L   | 0.526      | -            | -                | -                | -         |    -9.26 | BORO, DALIEN, dreez, outex, Pepo |
|            5 |     1504 | 2024-11-15 | Dusty Roots    | L   | 0.479      | -            | -                | -                | -         |    -6.85 | BORO, DALIEN, outex, Pepo, STYKO |
|            4 |     1507 | 2024-11-15 | Partizan       | W   | 0.479      | 0.617        | 0.080 (0.024)    | 0.553 (0.164)    | 1 (0.479) |    13.27 | BORO, DALIEN, outex, Pepo, STYKO |
|            3 |     1519 | 2024-11-14 | Kitsune        | W   | 0.475      | 0.617        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.475) |     2.25 | BORO, DALIEN, outex, Pepo, STYKO |
|            2 |     1564 | 2024-11-13 | Czech Republic | L   | 0.467      | -            | -                | -                | -         |    -9.36 | BORO, DALIEN, outex, Pepo, STYKO |
|            1 |     1567 | 2024-11-13 | The Huns       | L   | 0.467      | -            | -                | -                | -         |    -3.96 | BORO, DALIEN, outex, Pepo, STYKO |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($348.11)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.540 | $645.00        | $348.11         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
