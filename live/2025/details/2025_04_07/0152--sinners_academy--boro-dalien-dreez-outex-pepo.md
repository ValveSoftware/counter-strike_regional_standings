### Roster Details<br />
Team Name: SINNERS Academy<br />
Roster: BORO, DALIEN, dreez, outex, Pepo<br />
Global Rank: [152](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [96]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  657.5<br />
<br />
Final Rank Value (657.5) = Starting Rank Value (662.6) + Head To Head Adjustments (-5.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.241[<sup>1</sup>](#table2)
- Bounty Collected: 0.265[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.052[<sup>2</sup>](#table1)

The average of these factors is 0.143<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 662.6
- 400 + ( ( 0.143 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 662.6


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
|            6 |     2293 | 2024-11-22 | BRUTE          | L   | 0.293      | -            | -                | -                | -         |    -5.05 | BORO, DALIEN, dreez, outex, Pepo |
|            5 |     2439 | 2024-11-15 | Dusty Roots    | L   | 0.246      | -            | -                | -                | -         |    -3.08 | BORO, DALIEN, outex, Pepo, STYKO |
|            4 |     2442 | 2024-11-15 | Partizan       | W   | 0.246      | 0.617        | 0.110 (0.017)    | 0.795 (0.121)    | 1 (0.246) |     6.90 | BORO, DALIEN, outex, Pepo, STYKO |
|            3 |     2454 | 2024-11-14 | Kitsune        | W   | 0.242      | 0.617        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.242) |     1.43 | BORO, DALIEN, outex, Pepo, STYKO |
|            2 |     2499 | 2024-11-13 | Czech Republic | L   | 0.234      | -            | -                | -                | -         |    -4.74 | BORO, DALIEN, outex, Pepo, STYKO |
|            1 |     2502 | 2024-11-13 | The Huns       | L   | 0.234      | -            | -                | -                | -         |    -0.55 | BORO, DALIEN, outex, Pepo, STYKO |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($197.79)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.307 | $645.00        | $197.79         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
